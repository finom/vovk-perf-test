import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nif")
export default class NifController {
  @operation({
    summary: "Get Nif",
  })
  @get()
  static getNif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nif",
  })
  @post("{id}")
  static createNif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
