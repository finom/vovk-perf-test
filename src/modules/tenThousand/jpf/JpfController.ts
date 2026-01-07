import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpf")
export default class JpfController {
  @operation({
    summary: "Get Jpf",
  })
  @get()
  static getJpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpf",
  })
  @post("{id}")
  static createJpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
