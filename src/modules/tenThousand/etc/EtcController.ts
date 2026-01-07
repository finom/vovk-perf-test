import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etc")
export default class EtcController {
  @operation({
    summary: "Get Etc",
  })
  @get()
  static getEtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etc",
  })
  @post("{id}")
  static createEtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
