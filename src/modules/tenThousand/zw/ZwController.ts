import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zw")
export default class ZwController {
  @operation({
    summary: "Get Zw",
  })
  @get()
  static getZw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zw",
  })
  @post("{id}")
  static createZw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
