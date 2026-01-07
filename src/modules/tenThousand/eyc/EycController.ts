import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyc")
export default class EycController {
  @operation({
    summary: "Get Eyc",
  })
  @get()
  static getEyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyc",
  })
  @post("{id}")
  static createEyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
