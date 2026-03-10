import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jap")
export default class JapController {
  @operation({
    summary: "Get Jap",
  })
  @get()
  static getJap = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jap",
  })
  @post("{id}")
  static createJap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
