import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpb")
export default class JpbController {
  @operation({
    summary: "Get Jpb",
  })
  @get()
  static getJpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpb",
  })
  @post("{id}")
  static createJpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
