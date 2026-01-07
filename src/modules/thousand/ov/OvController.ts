import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ov")
export default class OvController {
  @operation({
    summary: "Get Ov",
  })
  @get()
  static getOv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ov",
  })
  @post("{id}")
  static createOv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
