import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aa")
export default class AaController {
  @operation({
    summary: "Get Aa",
  })
  @get()
  static getAa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aa",
  })
  @post("{id}")
  static createAa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
