import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecd")
export default class EcdController {
  @operation({
    summary: "Get Ecd",
  })
  @get()
  static getEcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecd",
  })
  @post("{id}")
  static createEcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
