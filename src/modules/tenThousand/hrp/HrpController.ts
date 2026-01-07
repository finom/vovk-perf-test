import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrp")
export default class HrpController {
  @operation({
    summary: "Get Hrp",
  })
  @get()
  static getHrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrp",
  })
  @post("{id}")
  static createHrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
