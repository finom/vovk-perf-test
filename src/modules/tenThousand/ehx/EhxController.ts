import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehx")
export default class EhxController {
  @operation({
    summary: "Get Ehx",
  })
  @get()
  static getEhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehx",
  })
  @post("{id}")
  static createEhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
