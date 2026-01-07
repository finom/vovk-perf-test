import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrj")
export default class HrjController {
  @operation({
    summary: "Get Hrj",
  })
  @get()
  static getHrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrj",
  })
  @post("{id}")
  static createHrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
