import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epp")
export default class EppController {
  @operation({
    summary: "Get Epp",
  })
  @get()
  static getEpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epp",
  })
  @post("{id}")
  static createEpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
