import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwq")
export default class JwqController {
  @operation({
    summary: "Get Jwq",
  })
  @get()
  static getJwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwq",
  })
  @post("{id}")
  static createJwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
