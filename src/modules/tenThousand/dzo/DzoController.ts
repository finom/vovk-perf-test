import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzo")
export default class DzoController {
  @operation({
    summary: "Get Dzo",
  })
  @get()
  static getDzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzo",
  })
  @post("{id}")
  static createDzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
