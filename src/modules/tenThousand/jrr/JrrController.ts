import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrr")
export default class JrrController {
  @operation({
    summary: "Get Jrr",
  })
  @get()
  static getJrr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jrr",
  })
  @post("{id}")
  static createJrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
