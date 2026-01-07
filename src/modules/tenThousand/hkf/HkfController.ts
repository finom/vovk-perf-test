import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkf")
export default class HkfController {
  @operation({
    summary: "Get Hkf",
  })
  @get()
  static getHkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkf",
  })
  @post("{id}")
  static createHkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
