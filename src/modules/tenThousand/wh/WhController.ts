import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wh")
export default class WhController {
  @operation({
    summary: "Get Wh",
  })
  @get()
  static getWh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wh",
  })
  @post("{id}")
  static createWh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
