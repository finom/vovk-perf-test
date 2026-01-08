import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjv")
export default class FjvController {
  @operation({
    summary: "Get Fjv",
  })
  @get()
  static getFjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjv",
  })
  @post("{id}")
  static createFjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
