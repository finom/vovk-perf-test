import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ac")
export default class AcController {
  @operation({
    summary: "Get Ac",
  })
  @get()
  static getAc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ac",
  })
  @post("{id}")
  static createAc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
