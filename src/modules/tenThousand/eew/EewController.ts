import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eew")
export default class EewController {
  @operation({
    summary: "Get Eew",
  })
  @get()
  static getEew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eew",
  })
  @post("{id}")
  static createEew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
