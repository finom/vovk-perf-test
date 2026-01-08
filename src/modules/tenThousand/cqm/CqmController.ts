import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqm")
export default class CqmController {
  @operation({
    summary: "Get Cqm",
  })
  @get()
  static getCqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqm",
  })
  @post("{id}")
  static createCqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
