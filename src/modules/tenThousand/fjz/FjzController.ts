import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjz")
export default class FjzController {
  @operation({
    summary: "Get Fjz",
  })
  @get()
  static getFjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjz",
  })
  @post("{id}")
  static createFjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
