import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vx")
export default class VxController {
  @operation({
    summary: "Get Vx",
  })
  @get()
  static getVx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vx",
  })
  @post("{id}")
  static createVx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
