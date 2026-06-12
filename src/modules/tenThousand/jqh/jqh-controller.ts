import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqh")
export default class JqhController {
  @operation({
    summary: "Get Jqh",
  })
  @get()
  static getJqh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqh",
  })
  @post("{id}")
  static createJqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
