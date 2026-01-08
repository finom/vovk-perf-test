import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nml")
export default class NmlController {
  @operation({
    summary: "Get Nml",
  })
  @get()
  static getNml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nml",
  })
  @post("{id}")
  static createNml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
