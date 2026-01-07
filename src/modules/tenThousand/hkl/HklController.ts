import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkl")
export default class HklController {
  @operation({
    summary: "Get Hkl",
  })
  @get()
  static getHkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkl",
  })
  @post("{id}")
  static createHkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
