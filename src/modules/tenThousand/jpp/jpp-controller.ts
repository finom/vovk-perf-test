import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpp")
export default class JppController {
  @operation({
    summary: "Get Jpp",
  })
  @get()
  static getJpp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpp",
  })
  @post("{id}")
  static createJpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
