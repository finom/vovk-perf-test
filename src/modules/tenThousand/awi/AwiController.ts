import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awi")
export default class AwiController {
  @operation({
    summary: "Get Awi",
  })
  @get()
  static getAwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awi",
  })
  @post("{id}")
  static createAwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
