import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqv")
export default class JqvController {
  @operation({
    summary: "Get Jqv",
  })
  @get()
  static getJqv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqv",
  })
  @post("{id}")
  static createJqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
