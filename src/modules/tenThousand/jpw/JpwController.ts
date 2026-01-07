import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpw")
export default class JpwController {
  @operation({
    summary: "Get Jpw",
  })
  @get()
  static getJpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpw",
  })
  @post("{id}")
  static createJpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
