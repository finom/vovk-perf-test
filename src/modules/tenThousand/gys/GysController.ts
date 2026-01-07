import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gys")
export default class GysController {
  @operation({
    summary: "Get Gys",
  })
  @get()
  static getGys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gys",
  })
  @post("{id}")
  static createGys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
