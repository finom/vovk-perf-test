import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cof")
export default class CofController {
  @operation({
    summary: "Get Cof",
  })
  @get()
  static getCof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cof",
  })
  @post("{id}")
  static createCof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
