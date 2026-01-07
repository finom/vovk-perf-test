import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwh")
export default class HwhController {
  @operation({
    summary: "Get Hwh",
  })
  @get()
  static getHwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwh",
  })
  @post("{id}")
  static createHwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
