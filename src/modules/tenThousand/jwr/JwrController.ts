import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwr")
export default class JwrController {
  @operation({
    summary: "Get Jwr",
  })
  @get()
  static getJwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwr",
  })
  @post("{id}")
  static createJwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
