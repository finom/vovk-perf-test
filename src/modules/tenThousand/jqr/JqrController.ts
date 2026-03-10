import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqr")
export default class JqrController {
  @operation({
    summary: "Get Jqr",
  })
  @get()
  static getJqr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqr",
  })
  @post("{id}")
  static createJqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
