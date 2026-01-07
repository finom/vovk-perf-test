import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrm")
export default class HrmController {
  @operation({
    summary: "Get Hrm",
  })
  @get()
  static getHrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrm",
  })
  @post("{id}")
  static createHrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
