import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjg")
export default class FjgController {
  @operation({
    summary: "Get Fjg",
  })
  @get()
  static getFjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjg",
  })
  @post("{id}")
  static createFjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
