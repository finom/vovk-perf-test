import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhy")
export default class FhyController {
  @operation({
    summary: "Get Fhy",
  })
  @get()
  static getFhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhy",
  })
  @post("{id}")
  static createFhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
