import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efd")
export default class EfdController {
  @operation({
    summary: "Get Efd",
  })
  @get()
  static getEfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efd",
  })
  @post("{id}")
  static createEfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
