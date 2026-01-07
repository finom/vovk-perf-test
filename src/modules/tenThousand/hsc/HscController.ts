import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsc")
export default class HscController {
  @operation({
    summary: "Get Hsc",
  })
  @get()
  static getHsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsc",
  })
  @post("{id}")
  static createHsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
