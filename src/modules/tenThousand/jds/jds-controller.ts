import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jds")
export default class JdsController {
  @operation({
    summary: "Get Jds",
  })
  @get()
  static getJds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jds",
  })
  @post("{id}")
  static createJds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
