import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdg")
export default class KdgController {
  @operation({
    summary: "Get Kdg",
  })
  @get()
  static getKdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdg",
  })
  @post("{id}")
  static createKdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
