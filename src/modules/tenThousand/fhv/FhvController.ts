import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhv")
export default class FhvController {
  @operation({
    summary: "Get Fhv",
  })
  @get()
  static getFhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhv",
  })
  @post("{id}")
  static createFhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
