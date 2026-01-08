import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eeo")
export default class EeoController {
  @operation({
    summary: "Get Eeo",
  })
  @get()
  static getEeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeo",
  })
  @post("{id}")
  static createEeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
