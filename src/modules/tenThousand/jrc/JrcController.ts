import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrc")
export default class JrcController {
  @operation({
    summary: "Get Jrc",
  })
  @get()
  static getJrc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jrc",
  })
  @post("{id}")
  static createJrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
