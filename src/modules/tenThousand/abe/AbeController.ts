import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abe")
export default class AbeController {
  @operation({
    summary: "Get Abe",
  })
  @get()
  static getAbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abe",
  })
  @post("{id}")
  static createAbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
