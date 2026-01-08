import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frr")
export default class FrrController {
  @operation({
    summary: "Get Frr",
  })
  @get()
  static getFrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frr",
  })
  @post("{id}")
  static createFrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
