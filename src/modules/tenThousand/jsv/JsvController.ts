import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsv")
export default class JsvController {
  @operation({
    summary: "Get Jsv",
  })
  @get()
  static getJsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsv",
  })
  @post("{id}")
  static createJsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
