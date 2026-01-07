import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akz")
export default class AkzController {
  @operation({
    summary: "Get Akz",
  })
  @get()
  static getAkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akz",
  })
  @post("{id}")
  static createAkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
