import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jws")
export default class JwsController {
  @operation({
    summary: "Get Jws",
  })
  @get()
  static getJws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jws",
  })
  @post("{id}")
  static createJws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
