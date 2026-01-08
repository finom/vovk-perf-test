import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lam")
export default class LamController {
  @operation({
    summary: "Get Lam",
  })
  @get()
  static getLam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lam",
  })
  @post("{id}")
  static createLam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
