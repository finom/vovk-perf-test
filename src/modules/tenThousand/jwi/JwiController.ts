import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwi")
export default class JwiController {
  @operation({
    summary: "Get Jwi",
  })
  @get()
  static getJwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwi",
  })
  @post("{id}")
  static createJwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
