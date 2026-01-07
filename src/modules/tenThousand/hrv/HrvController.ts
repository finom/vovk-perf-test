import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrv")
export default class HrvController {
  @operation({
    summary: "Get Hrv",
  })
  @get()
  static getHrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrv",
  })
  @post("{id}")
  static createHrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
