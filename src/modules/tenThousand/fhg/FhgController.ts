import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhg")
export default class FhgController {
  @operation({
    summary: "Get Fhg",
  })
  @get()
  static getFhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhg",
  })
  @post("{id}")
  static createFhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
