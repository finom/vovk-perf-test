import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlj")
export default class HljController {
  @operation({
    summary: "Get Hlj",
  })
  @get()
  static getHlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlj",
  })
  @post("{id}")
  static createHlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
