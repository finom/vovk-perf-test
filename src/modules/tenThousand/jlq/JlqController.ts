import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlq")
export default class JlqController {
  @operation({
    summary: "Get Jlq",
  })
  @get()
  static getJlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlq",
  })
  @post("{id}")
  static createJlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
