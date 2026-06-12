import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwd")
export default class KwdController {
  @operation({
    summary: "Get Kwd",
  })
  @get()
  static getKwd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kwd",
  })
  @post("{id}")
  static createKwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
