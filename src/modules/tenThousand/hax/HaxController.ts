import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hax")
export default class HaxController {
  @operation({
    summary: "Get Hax",
  })
  @get()
  static getHax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hax",
  })
  @post("{id}")
  static createHax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
