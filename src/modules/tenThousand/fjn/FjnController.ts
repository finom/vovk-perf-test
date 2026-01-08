import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjn")
export default class FjnController {
  @operation({
    summary: "Get Fjn",
  })
  @get()
  static getFjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjn",
  })
  @post("{id}")
  static createFjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
