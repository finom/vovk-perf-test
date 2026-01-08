import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhj")
export default class FhjController {
  @operation({
    summary: "Get Fhj",
  })
  @get()
  static getFhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhj",
  })
  @post("{id}")
  static createFhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
