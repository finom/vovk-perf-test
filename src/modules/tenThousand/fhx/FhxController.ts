import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhx")
export default class FhxController {
  @operation({
    summary: "Get Fhx",
  })
  @get()
  static getFhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhx",
  })
  @post("{id}")
  static createFhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
