import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxa")
export default class JxaController {
  @operation({
    summary: "Get Jxa",
  })
  @get()
  static getJxa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxa",
  })
  @post("{id}")
  static createJxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
