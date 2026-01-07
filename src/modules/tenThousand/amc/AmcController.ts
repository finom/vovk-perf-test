import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amc")
export default class AmcController {
  @operation({
    summary: "Get Amc",
  })
  @get()
  static getAmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amc",
  })
  @post("{id}")
  static createAmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
