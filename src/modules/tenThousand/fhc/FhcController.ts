import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhc")
export default class FhcController {
  @operation({
    summary: "Get Fhc",
  })
  @get()
  static getFhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhc",
  })
  @post("{id}")
  static createFhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
