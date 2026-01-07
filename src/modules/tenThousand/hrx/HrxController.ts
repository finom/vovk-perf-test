import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrx")
export default class HrxController {
  @operation({
    summary: "Get Hrx",
  })
  @get()
  static getHrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrx",
  })
  @post("{id}")
  static createHrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
