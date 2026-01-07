import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyf")
export default class CyfController {
  @operation({
    summary: "Get Cyf",
  })
  @get()
  static getCyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyf",
  })
  @post("{id}")
  static createCyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
