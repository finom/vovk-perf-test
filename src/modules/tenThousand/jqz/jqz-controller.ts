import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqz")
export default class JqzController {
  @operation({
    summary: "Get Jqz",
  })
  @get()
  static getJqz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqz",
  })
  @post("{id}")
  static createJqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
