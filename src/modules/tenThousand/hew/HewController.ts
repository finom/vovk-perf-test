import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hew")
export default class HewController {
  @operation({
    summary: "Get Hew",
  })
  @get()
  static getHew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hew",
  })
  @post("{id}")
  static createHew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
