import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsc")
export default class NscController {
  @operation({
    summary: "Get Nsc",
  })
  @get()
  static getNsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsc",
  })
  @post("{id}")
  static createNsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
