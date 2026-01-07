import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcz")
export default class HczController {
  @operation({
    summary: "Get Hcz",
  })
  @get()
  static getHcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcz",
  })
  @post("{id}")
  static createHcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
