import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edq")
export default class EdqController {
  @operation({
    summary: "Get Edq",
  })
  @get()
  static getEdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edq",
  })
  @post("{id}")
  static createEdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
