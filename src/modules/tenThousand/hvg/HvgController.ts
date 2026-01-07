import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvg")
export default class HvgController {
  @operation({
    summary: "Get Hvg",
  })
  @get()
  static getHvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvg",
  })
  @post("{id}")
  static createHvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
