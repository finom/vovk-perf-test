import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jq")
export default class JqController {
  @operation({
    summary: "Get Jq",
  })
  @get()
  static getJq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jq",
  })
  @post("{id}")
  static createJq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
