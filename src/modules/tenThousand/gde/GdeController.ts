import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gde")
export default class GdeController {
  @operation({
    summary: "Get Gde",
  })
  @get()
  static getGde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gde",
  })
  @post("{id}")
  static createGde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
