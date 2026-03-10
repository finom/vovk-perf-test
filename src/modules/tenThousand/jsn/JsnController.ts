import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsn")
export default class JsnController {
  @operation({
    summary: "Get Jsn",
  })
  @get()
  static getJsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jsn",
  })
  @post("{id}")
  static createJsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
