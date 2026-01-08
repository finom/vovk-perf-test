import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwb")
export default class JwbController {
  @operation({
    summary: "Get Jwb",
  })
  @get()
  static getJwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwb",
  })
  @post("{id}")
  static createJwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
