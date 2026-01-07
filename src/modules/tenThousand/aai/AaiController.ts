import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aai")
export default class AaiController {
  @operation({
    summary: "Get Aai",
  })
  @get()
  static getAai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aai",
  })
  @post("{id}")
  static createAai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
