import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwc")
export default class JwcController {
  @operation({
    summary: "Get Jwc",
  })
  @get()
  static getJwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwc",
  })
  @post("{id}")
  static createJwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
