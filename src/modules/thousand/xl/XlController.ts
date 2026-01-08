import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xl")
export default class XlController {
  @operation({
    summary: "Get Xl",
  })
  @get()
  static getXl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xl",
  })
  @post("{id}")
  static createXl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
