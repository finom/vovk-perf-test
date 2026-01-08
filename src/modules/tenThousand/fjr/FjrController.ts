import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjr")
export default class FjrController {
  @operation({
    summary: "Get Fjr",
  })
  @get()
  static getFjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjr",
  })
  @post("{id}")
  static createFjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
