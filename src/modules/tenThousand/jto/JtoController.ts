import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jto")
export default class JtoController {
  @operation({
    summary: "Get Jto",
  })
  @get()
  static getJto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jto",
  })
  @post("{id}")
  static createJto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
