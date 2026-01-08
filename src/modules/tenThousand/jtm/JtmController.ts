import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtm")
export default class JtmController {
  @operation({
    summary: "Get Jtm",
  })
  @get()
  static getJtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtm",
  })
  @post("{id}")
  static createJtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
