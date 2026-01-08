import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ape")
export default class ApeController {
  @operation({
    summary: "Get Ape",
  })
  @get()
  static getApe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ape",
  })
  @post("{id}")
  static createApe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
