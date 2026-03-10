import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgi")
export default class CgiController {
  @operation({
    summary: "Get Cgi",
  })
  @get()
  static getCgi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cgi",
  })
  @post("{id}")
  static createCgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
