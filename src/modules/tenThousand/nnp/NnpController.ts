import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnp")
export default class NnpController {
  @operation({
    summary: "Get Nnp",
  })
  @get()
  static getNnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnp",
  })
  @post("{id}")
  static createNnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
