import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcs")
export default class JcsController {
  @operation({
    summary: "Get Jcs",
  })
  @get()
  static getJcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcs",
  })
  @post("{id}")
  static createJcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
