import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fem")
export default class FemController {
  @operation({
    summary: "Get Fem",
  })
  @get()
  static getFem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fem",
  })
  @post("{id}")
  static createFem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
