import { procedure, prefix, get, post, operation } from "vovk";

@prefix("de")
export default class DeController {
  @operation({
    summary: "Get De",
  })
  @get()
  static getDe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create De",
  })
  @post("{id}")
  static createDe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
