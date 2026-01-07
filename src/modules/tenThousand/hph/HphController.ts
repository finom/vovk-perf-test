import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hph")
export default class HphController {
  @operation({
    summary: "Get Hph",
  })
  @get()
  static getHph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hph",
  })
  @post("{id}")
  static createHph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
