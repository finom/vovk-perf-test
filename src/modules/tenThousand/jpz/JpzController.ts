import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpz")
export default class JpzController {
  @operation({
    summary: "Get Jpz",
  })
  @get()
  static getJpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpz",
  })
  @post("{id}")
  static createJpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
