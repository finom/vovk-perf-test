import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjc")
export default class FjcController {
  @operation({
    summary: "Get Fjc",
  })
  @get()
  static getFjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjc",
  })
  @post("{id}")
  static createFjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
