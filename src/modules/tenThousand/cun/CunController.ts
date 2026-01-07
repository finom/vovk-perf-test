import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cun")
export default class CunController {
  @operation({
    summary: "Get Cun",
  })
  @get()
  static getCun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cun",
  })
  @post("{id}")
  static createCun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
