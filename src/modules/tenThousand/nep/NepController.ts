import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nep")
export default class NepController {
  @operation({
    summary: "Get Nep",
  })
  @get()
  static getNep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nep",
  })
  @post("{id}")
  static createNep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
