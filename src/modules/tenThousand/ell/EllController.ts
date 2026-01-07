import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ell")
export default class EllController {
  @operation({
    summary: "Get Ell",
  })
  @get()
  static getEll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ell",
  })
  @post("{id}")
  static createEll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
