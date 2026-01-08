import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjd")
export default class FjdController {
  @operation({
    summary: "Get Fjd",
  })
  @get()
  static getFjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjd",
  })
  @post("{id}")
  static createFjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
