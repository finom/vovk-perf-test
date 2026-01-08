import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwf")
export default class JwfController {
  @operation({
    summary: "Get Jwf",
  })
  @get()
  static getJwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwf",
  })
  @post("{id}")
  static createJwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
