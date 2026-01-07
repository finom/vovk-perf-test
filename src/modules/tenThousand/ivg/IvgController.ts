import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivg")
export default class IvgController {
  @operation({
    summary: "Get Ivg",
  })
  @get()
  static getIvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivg",
  })
  @post("{id}")
  static createIvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
