import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsw")
export default class JswController {
  @operation({
    summary: "Get Jsw",
  })
  @get()
  static getJsw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jsw",
  })
  @post("{id}")
  static createJsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
