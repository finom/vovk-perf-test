import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eue")
export default class EueController {
  @operation({
    summary: "Get Eue",
  })
  @get()
  static getEue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eue",
  })
  @post("{id}")
  static createEue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
