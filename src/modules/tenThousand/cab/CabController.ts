import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cab")
export default class CabController {
  @operation({
    summary: "Get Cab",
  })
  @get()
  static getCab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cab",
  })
  @post("{id}")
  static createCab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
