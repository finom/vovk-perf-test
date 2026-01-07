import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eae")
export default class EaeController {
  @operation({
    summary: "Get Eae",
  })
  @get()
  static getEae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eae",
  })
  @post("{id}")
  static createEae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
