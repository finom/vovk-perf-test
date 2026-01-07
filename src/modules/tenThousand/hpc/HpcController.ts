import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpc")
export default class HpcController {
  @operation({
    summary: "Get Hpc",
  })
  @get()
  static getHpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpc",
  })
  @post("{id}")
  static createHpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
