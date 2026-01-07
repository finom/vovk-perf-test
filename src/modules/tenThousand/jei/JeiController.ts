import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jei")
export default class JeiController {
  @operation({
    summary: "Get Jei",
  })
  @get()
  static getJei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jei",
  })
  @post("{id}")
  static createJei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
