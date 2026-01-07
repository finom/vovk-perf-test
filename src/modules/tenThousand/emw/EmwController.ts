import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emw")
export default class EmwController {
  @operation({
    summary: "Get Emw",
  })
  @get()
  static getEmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emw",
  })
  @post("{id}")
  static createEmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
