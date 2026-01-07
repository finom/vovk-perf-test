import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tu")
export default class TuController {
  @operation({
    summary: "Get Tu",
  })
  @get()
  static getTu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tu",
  })
  @post("{id}")
  static createTu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
