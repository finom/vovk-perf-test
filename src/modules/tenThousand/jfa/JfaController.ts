import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfa")
export default class JfaController {
  @operation({
    summary: "Get Jfa",
  })
  @get()
  static getJfa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfa",
  })
  @post("{id}")
  static createJfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
