import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcj")
export default class HcjController {
  @operation({
    summary: "Get Hcj",
  })
  @get()
  static getHcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcj",
  })
  @post("{id}")
  static createHcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
