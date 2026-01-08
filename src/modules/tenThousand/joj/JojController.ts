import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joj")
export default class JojController {
  @operation({
    summary: "Get Joj",
  })
  @get()
  static getJoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joj",
  })
  @post("{id}")
  static createJoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
