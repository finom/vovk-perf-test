import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvu")
export default class JvuController {
  @operation({
    summary: "Get Jvu",
  })
  @get()
  static getJvu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvu",
  })
  @post("{id}")
  static createJvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
