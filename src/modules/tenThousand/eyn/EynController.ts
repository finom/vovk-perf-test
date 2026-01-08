import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyn")
export default class EynController {
  @operation({
    summary: "Get Eyn",
  })
  @get()
  static getEyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyn",
  })
  @post("{id}")
  static createEyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
