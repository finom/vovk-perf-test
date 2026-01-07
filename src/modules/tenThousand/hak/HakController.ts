import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hak")
export default class HakController {
  @operation({
    summary: "Get Hak",
  })
  @get()
  static getHak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hak",
  })
  @post("{id}")
  static createHak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
