import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aei")
export default class AeiController {
  @operation({
    summary: "Get Aei",
  })
  @get()
  static getAei = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aei",
  })
  @post("{id}")
  static createAei = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
