import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dty")
export default class DtyController {
  @operation({
    summary: "Get Dty",
  })
  @get()
  static getDty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dty",
  })
  @post("{id}")
  static createDty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
