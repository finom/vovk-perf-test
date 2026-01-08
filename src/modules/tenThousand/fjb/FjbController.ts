import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjb")
export default class FjbController {
  @operation({
    summary: "Get Fjb",
  })
  @get()
  static getFjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjb",
  })
  @post("{id}")
  static createFjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
