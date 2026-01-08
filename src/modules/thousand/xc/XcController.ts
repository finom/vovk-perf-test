import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xc")
export default class XcController {
  @operation({
    summary: "Get Xc",
  })
  @get()
  static getXc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xc",
  })
  @post("{id}")
  static createXc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
