import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jeo")
export default class JeoController {
  @operation({
    summary: "Get Jeo",
  })
  @get()
  static getJeo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jeo",
  })
  @post("{id}")
  static createJeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
