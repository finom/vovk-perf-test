import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ut")
export default class UtController {
  @operation({
    summary: "Get Ut",
  })
  @get()
  static getUt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ut",
  })
  @post("{id}")
  static createUt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
