import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyp")
export default class CypController {
  @operation({
    summary: "Get Cyp",
  })
  @get()
  static getCyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyp",
  })
  @post("{id}")
  static createCyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
