import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jt")
export default class JtController {
  @operation({
    summary: "Get Jt",
  })
  @get()
  static getJt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jt",
  })
  @post("{id}")
  static createJt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
