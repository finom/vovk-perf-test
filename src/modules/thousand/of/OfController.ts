import { procedure, prefix, get, post, operation } from "vovk";

@prefix("of")
export default class OfController {
  @operation({
    summary: "Get Of",
  })
  @get()
  static getOf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Of",
  })
  @post("{id}")
  static createOf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
