import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgu")
export default class DguController {
  @operation({
    summary: "Get Dgu",
  })
  @get()
  static getDgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgu",
  })
  @post("{id}")
  static createDgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
