import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htk")
export default class HtkController {
  @operation({
    summary: "Get Htk",
  })
  @get()
  static getHtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htk",
  })
  @post("{id}")
  static createHtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
