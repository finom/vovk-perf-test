import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zb")
export default class ZbController {
  @operation({
    summary: "Get Zb",
  })
  @get()
  static getZb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zb",
  })
  @post("{id}")
  static createZb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
