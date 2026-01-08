import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjh")
export default class FjhController {
  @operation({
    summary: "Get Fjh",
  })
  @get()
  static getFjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjh",
  })
  @post("{id}")
  static createFjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
