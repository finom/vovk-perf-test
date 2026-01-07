import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duq")
export default class DuqController {
  @operation({
    summary: "Get Duq",
  })
  @get()
  static getDuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duq",
  })
  @post("{id}")
  static createDuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
