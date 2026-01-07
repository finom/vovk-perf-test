import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inc")
export default class IncController {
  @operation({
    summary: "Get Inc",
  })
  @get()
  static getInc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inc",
  })
  @post("{id}")
  static createInc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
