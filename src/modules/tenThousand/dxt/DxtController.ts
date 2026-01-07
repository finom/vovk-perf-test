import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxt")
export default class DxtController {
  @operation({
    summary: "Get Dxt",
  })
  @get()
  static getDxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxt",
  })
  @post("{id}")
  static createDxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
