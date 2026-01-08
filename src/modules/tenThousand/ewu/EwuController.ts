import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewu")
export default class EwuController {
  @operation({
    summary: "Get Ewu",
  })
  @get()
  static getEwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewu",
  })
  @post("{id}")
  static createEwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
