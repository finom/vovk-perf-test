import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xw")
export default class XwController {
  @operation({
    summary: "Get Xw",
  })
  @get()
  static getXw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xw",
  })
  @post("{id}")
  static createXw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
