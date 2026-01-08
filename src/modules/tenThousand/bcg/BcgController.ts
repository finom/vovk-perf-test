import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcg")
export default class BcgController {
  @operation({
    summary: "Get Bcg",
  })
  @get()
  static getBcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcg",
  })
  @post("{id}")
  static createBcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
