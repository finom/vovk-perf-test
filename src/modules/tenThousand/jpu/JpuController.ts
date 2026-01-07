import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpu")
export default class JpuController {
  @operation({
    summary: "Get Jpu",
  })
  @get()
  static getJpu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpu",
  })
  @post("{id}")
  static createJpu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
