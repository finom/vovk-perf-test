import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhx")
export default class HhxController {
  @operation({
    summary: "Get Hhx",
  })
  @get()
  static getHhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhx",
  })
  @post("{id}")
  static createHhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
