import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hck")
export default class HckController {
  @operation({
    summary: "Get Hck",
  })
  @get()
  static getHck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hck",
  })
  @post("{id}")
  static createHck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
