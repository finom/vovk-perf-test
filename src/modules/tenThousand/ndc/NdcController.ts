import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndc")
export default class NdcController {
  @operation({
    summary: "Get Ndc",
  })
  @get()
  static getNdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndc",
  })
  @post("{id}")
  static createNdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
