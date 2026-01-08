import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eox")
export default class EoxController {
  @operation({
    summary: "Get Eox",
  })
  @get()
  static getEox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eox",
  })
  @post("{id}")
  static createEox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
