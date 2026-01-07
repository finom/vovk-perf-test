import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dew")
export default class DewController {
  @operation({
    summary: "Get Dew",
  })
  @get()
  static getDew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dew",
  })
  @post("{id}")
  static createDew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
