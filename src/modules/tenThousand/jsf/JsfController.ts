import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsf")
export default class JsfController {
  @operation({
    summary: "Get Jsf",
  })
  @get()
  static getJsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsf",
  })
  @post("{id}")
  static createJsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
