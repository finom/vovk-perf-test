import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlw")
export default class JlwController {
  @operation({
    summary: "Get Jlw",
  })
  @get()
  static getJlw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlw",
  })
  @post("{id}")
  static createJlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
