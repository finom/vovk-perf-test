import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dio")
export default class DioController {
  @operation({
    summary: "Get Dio",
  })
  @get()
  static getDio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dio",
  })
  @post("{id}")
  static createDio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
