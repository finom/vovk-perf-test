import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jta")
export default class JtaController {
  @operation({
    summary: "Get Jta",
  })
  @get()
  static getJta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jta",
  })
  @post("{id}")
  static createJta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
