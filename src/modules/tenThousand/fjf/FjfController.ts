import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjf")
export default class FjfController {
  @operation({
    summary: "Get Fjf",
  })
  @get()
  static getFjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjf",
  })
  @post("{id}")
  static createFjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
