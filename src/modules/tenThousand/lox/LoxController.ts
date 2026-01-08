import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lox")
export default class LoxController {
  @operation({
    summary: "Get Lox",
  })
  @get()
  static getLox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lox",
  })
  @post("{id}")
  static createLox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
