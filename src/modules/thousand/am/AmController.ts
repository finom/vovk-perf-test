import { procedure, prefix, get, post, operation } from "vovk";

@prefix("am")
export default class AmController {
  @operation({
    summary: "Get Am",
  })
  @get()
  static getAm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Am",
  })
  @post("{id}")
  static createAm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
