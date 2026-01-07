import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvm")
export default class HvmController {
  @operation({
    summary: "Get Hvm",
  })
  @get()
  static getHvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvm",
  })
  @post("{id}")
  static createHvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
