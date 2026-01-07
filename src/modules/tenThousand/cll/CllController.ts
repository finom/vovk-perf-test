import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cll")
export default class CllController {
  @operation({
    summary: "Get Cll",
  })
  @get()
  static getCll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cll",
  })
  @post("{id}")
  static createCll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
