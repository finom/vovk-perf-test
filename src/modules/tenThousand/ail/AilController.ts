import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ail")
export default class AilController {
  @operation({
    summary: "Get Ail",
  })
  @get()
  static getAil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ail",
  })
  @post("{id}")
  static createAil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
