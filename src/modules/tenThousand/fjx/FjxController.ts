import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjx")
export default class FjxController {
  @operation({
    summary: "Get Fjx",
  })
  @get()
  static getFjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjx",
  })
  @post("{id}")
  static createFjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
