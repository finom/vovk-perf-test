import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acu")
export default class AcuController {
  @operation({
    summary: "Get Acu",
  })
  @get()
  static getAcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acu",
  })
  @post("{id}")
  static createAcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
