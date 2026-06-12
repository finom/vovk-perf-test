import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jho")
export default class JhoController {
  @operation({
    summary: "Get Jho",
  })
  @get()
  static getJho = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jho",
  })
  @post("{id}")
  static createJho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
