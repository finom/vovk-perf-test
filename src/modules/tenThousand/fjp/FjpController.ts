import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjp")
export default class FjpController {
  @operation({
    summary: "Get Fjp",
  })
  @get()
  static getFjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjp",
  })
  @post("{id}")
  static createFjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
