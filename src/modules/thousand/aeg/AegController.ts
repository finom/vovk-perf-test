import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeg")
export default class AegController {
  @operation({
    summary: "Get Aeg",
  })
  @get()
  static getAeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aeg",
  })
  @post("{id}")
  static createAeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
