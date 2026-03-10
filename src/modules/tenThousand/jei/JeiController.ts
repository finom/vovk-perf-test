import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jei")
export default class JeiController {
  @operation({
    summary: "Get Jei",
  })
  @get()
  static getJei = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jei",
  })
  @post("{id}")
  static createJei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
