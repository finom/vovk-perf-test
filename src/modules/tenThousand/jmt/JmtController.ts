import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmt")
export default class JmtController {
  @operation({
    summary: "Get Jmt",
  })
  @get()
  static getJmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmt",
  })
  @post("{id}")
  static createJmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
