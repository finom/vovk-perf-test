import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggg")
export default class GggController {
  @operation({
    summary: "Get Ggg",
  })
  @get()
  static getGgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggg",
  })
  @post("{id}")
  static createGgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
