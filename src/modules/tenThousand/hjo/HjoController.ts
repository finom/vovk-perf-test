import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjo")
export default class HjoController {
  @operation({
    summary: "Get Hjo",
  })
  @get()
  static getHjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjo",
  })
  @post("{id}")
  static createHjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
