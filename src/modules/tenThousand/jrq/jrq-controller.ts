import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrq")
export default class JrqController {
  @operation({
    summary: "Get Jrq",
  })
  @get()
  static getJrq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jrq",
  })
  @post("{id}")
  static createJrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
