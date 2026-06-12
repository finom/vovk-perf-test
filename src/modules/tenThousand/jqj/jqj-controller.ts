import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqj")
export default class JqjController {
  @operation({
    summary: "Get Jqj",
  })
  @get()
  static getJqj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqj",
  })
  @post("{id}")
  static createJqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
