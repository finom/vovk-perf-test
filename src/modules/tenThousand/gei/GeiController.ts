import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gei")
export default class GeiController {
  @operation({
    summary: "Get Gei",
  })
  @get()
  static getGei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gei",
  })
  @post("{id}")
  static createGei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
