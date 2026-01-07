import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecg")
export default class EcgController {
  @operation({
    summary: "Get Ecg",
  })
  @get()
  static getEcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecg",
  })
  @post("{id}")
  static createEcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
