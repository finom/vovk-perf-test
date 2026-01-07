import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ur")
export default class UrController {
  @operation({
    summary: "Get Ur",
  })
  @get()
  static getUr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ur",
  })
  @post("{id}")
  static createUr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
