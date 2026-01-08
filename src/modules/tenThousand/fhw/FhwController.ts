import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhw")
export default class FhwController {
  @operation({
    summary: "Get Fhw",
  })
  @get()
  static getFhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhw",
  })
  @post("{id}")
  static createFhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
