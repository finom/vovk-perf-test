import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrw")
export default class HrwController {
  @operation({
    summary: "Get Hrw",
  })
  @get()
  static getHrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrw",
  })
  @post("{id}")
  static createHrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
