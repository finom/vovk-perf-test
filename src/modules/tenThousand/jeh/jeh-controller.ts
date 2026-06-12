import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jeh")
export default class JehController {
  @operation({
    summary: "Get Jeh",
  })
  @get()
  static getJeh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jeh",
  })
  @post("{id}")
  static createJeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
