import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exi")
export default class ExiController {
  @operation({
    summary: "Get Exi",
  })
  @get()
  static getExi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exi",
  })
  @post("{id}")
  static createExi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
