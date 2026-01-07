import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kd")
export default class KdController {
  @operation({
    summary: "Get Kd",
  })
  @get()
  static getKd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kd",
  })
  @post("{id}")
  static createKd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
