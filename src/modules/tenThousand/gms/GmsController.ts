import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gms")
export default class GmsController {
  @operation({
    summary: "Get Gms",
  })
  @get()
  static getGms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gms",
  })
  @post("{id}")
  static createGms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
