import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acb")
export default class AcbController {
  @operation({
    summary: "Get Acb",
  })
  @get()
  static getAcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acb",
  })
  @post("{id}")
  static createAcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
