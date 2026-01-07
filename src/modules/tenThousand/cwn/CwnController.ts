import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwn")
export default class CwnController {
  @operation({
    summary: "Get Cwn",
  })
  @get()
  static getCwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwn",
  })
  @post("{id}")
  static createCwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
