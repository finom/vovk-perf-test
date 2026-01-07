import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epk")
export default class EpkController {
  @operation({
    summary: "Get Epk",
  })
  @get()
  static getEpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epk",
  })
  @post("{id}")
  static createEpk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
