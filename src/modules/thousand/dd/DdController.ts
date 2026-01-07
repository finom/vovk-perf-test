import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dd")
export default class DdController {
  @operation({
    summary: "Get Dd",
  })
  @get()
  static getDd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dd",
  })
  @post("{id}")
  static createDd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
