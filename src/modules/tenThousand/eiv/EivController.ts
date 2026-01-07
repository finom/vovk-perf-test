import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiv")
export default class EivController {
  @operation({
    summary: "Get Eiv",
  })
  @get()
  static getEiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eiv",
  })
  @post("{id}")
  static createEiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
