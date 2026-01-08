import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ena")
export default class EnaController {
  @operation({
    summary: "Get Ena",
  })
  @get()
  static getEna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ena",
  })
  @post("{id}")
  static createEna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
