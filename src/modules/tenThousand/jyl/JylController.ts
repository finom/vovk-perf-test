import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyl")
export default class JylController {
  @operation({
    summary: "Get Jyl",
  })
  @get()
  static getJyl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyl",
  })
  @post("{id}")
  static createJyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
