import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsu")
export default class HsuController {
  @operation({
    summary: "Get Hsu",
  })
  @get()
  static getHsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsu",
  })
  @post("{id}")
  static createHsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
