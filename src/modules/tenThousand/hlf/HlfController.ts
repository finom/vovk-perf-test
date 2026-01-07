import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlf")
export default class HlfController {
  @operation({
    summary: "Get Hlf",
  })
  @get()
  static getHlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlf",
  })
  @post("{id}")
  static createHlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
