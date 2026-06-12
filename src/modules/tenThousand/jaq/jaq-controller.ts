import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jaq")
export default class JaqController {
  @operation({
    summary: "Get Jaq",
  })
  @get()
  static getJaq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jaq",
  })
  @post("{id}")
  static createJaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
