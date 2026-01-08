import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhb")
export default class FhbController {
  @operation({
    summary: "Get Fhb",
  })
  @get()
  static getFhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhb",
  })
  @post("{id}")
  static createFhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
