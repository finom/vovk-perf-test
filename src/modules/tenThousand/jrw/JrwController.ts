import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrw")
export default class JrwController {
  @operation({
    summary: "Get Jrw",
  })
  @get()
  static getJrw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jrw",
  })
  @post("{id}")
  static createJrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
