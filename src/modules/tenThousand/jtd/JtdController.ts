import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtd")
export default class JtdController {
  @operation({
    summary: "Get Jtd",
  })
  @get()
  static getJtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtd",
  })
  @post("{id}")
  static createJtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
