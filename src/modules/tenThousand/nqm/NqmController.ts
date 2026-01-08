import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqm")
export default class NqmController {
  @operation({
    summary: "Get Nqm",
  })
  @get()
  static getNqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqm",
  })
  @post("{id}")
  static createNqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
