import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezz")
export default class EzzController {
  @operation({
    summary: "Get Ezz",
  })
  @get()
  static getEzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezz",
  })
  @post("{id}")
  static createEzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
