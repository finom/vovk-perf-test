import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("if")
export default class IfController {
  @operation({
    summary: "Get If",
  })
  @get()
  static getIf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create If",
  })
  @post("{id}")
  static createIf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
