import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clc")
export default class ClcController {
  @operation({
    summary: "Get Clc",
  })
  @get()
  static getClc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clc",
  })
  @post("{id}")
  static createClc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
