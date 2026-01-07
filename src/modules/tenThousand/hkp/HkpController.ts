import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkp")
export default class HkpController {
  @operation({
    summary: "Get Hkp",
  })
  @get()
  static getHkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkp",
  })
  @post("{id}")
  static createHkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
