import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyq")
export default class CyqController {
  @operation({
    summary: "Get Cyq",
  })
  @get()
  static getCyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyq",
  })
  @post("{id}")
  static createCyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
