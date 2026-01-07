import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaq")
export default class AaqController {
  @operation({
    summary: "Get Aaq",
  })
  @get()
  static getAaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaq",
  })
  @post("{id}")
  static createAaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
