import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwi")
export default class HwiController {
  @operation({
    summary: "Get Hwi",
  })
  @get()
  static getHwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwi",
  })
  @post("{id}")
  static createHwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
