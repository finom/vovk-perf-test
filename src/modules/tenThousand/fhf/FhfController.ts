import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhf")
export default class FhfController {
  @operation({
    summary: "Get Fhf",
  })
  @get()
  static getFhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhf",
  })
  @post("{id}")
  static createFhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
