import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ait")
export default class AitController {
  @operation({
    summary: "Get Ait",
  })
  @get()
  static getAit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ait",
  })
  @post("{id}")
  static createAit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
