import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyh")
export default class DyhController {
  @operation({
    summary: "Get Dyh",
  })
  @get()
  static getDyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyh",
  })
  @post("{id}")
  static createDyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
