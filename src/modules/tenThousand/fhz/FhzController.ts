import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhz")
export default class FhzController {
  @operation({
    summary: "Get Fhz",
  })
  @get()
  static getFhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhz",
  })
  @post("{id}")
  static createFhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
