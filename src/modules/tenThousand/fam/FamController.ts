import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fam")
export default class FamController {
  @operation({
    summary: "Get Fam",
  })
  @get()
  static getFam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fam",
  })
  @post("{id}")
  static createFam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
