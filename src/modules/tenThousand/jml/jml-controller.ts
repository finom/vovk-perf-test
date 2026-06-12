import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jml")
export default class JmlController {
  @operation({
    summary: "Get Jml",
  })
  @get()
  static getJml = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jml",
  })
  @post("{id}")
  static createJml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
