import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emk")
export default class EmkController {
  @operation({
    summary: "Get Emk",
  })
  @get()
  static getEmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emk",
  })
  @post("{id}")
  static createEmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
