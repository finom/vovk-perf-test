import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajs")
export default class AjsController {
  @operation({
    summary: "Get Ajs",
  })
  @get()
  static getAjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajs",
  })
  @post("{id}")
  static createAjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
