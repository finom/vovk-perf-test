import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bu")
export default class BuController {
  @operation({
    summary: "Get Bu",
  })
  @get()
  static getBu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bu",
  })
  @post("{id}")
  static createBu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
