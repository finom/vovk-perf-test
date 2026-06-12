import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmd")
export default class JmdController {
  @operation({
    summary: "Get Jmd",
  })
  @get()
  static getJmd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmd",
  })
  @post("{id}")
  static createJmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
