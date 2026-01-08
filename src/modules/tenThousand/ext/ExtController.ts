import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ext")
export default class ExtController {
  @operation({
    summary: "Get Ext",
  })
  @get()
  static getExt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ext",
  })
  @post("{id}")
  static createExt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
