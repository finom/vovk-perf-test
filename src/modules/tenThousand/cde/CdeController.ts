import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cde")
export default class CdeController {
  @operation({
    summary: "Get Cde",
  })
  @get()
  static getCde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cde",
  })
  @post("{id}")
  static createCde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
