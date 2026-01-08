import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edv")
export default class EdvController {
  @operation({
    summary: "Get Edv",
  })
  @get()
  static getEdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edv",
  })
  @post("{id}")
  static createEdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
