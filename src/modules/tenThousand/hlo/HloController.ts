import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlo")
export default class HloController {
  @operation({
    summary: "Get Hlo",
  })
  @get()
  static getHlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlo",
  })
  @post("{id}")
  static createHlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
