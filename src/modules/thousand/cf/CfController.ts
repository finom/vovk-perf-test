import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cf")
export default class CfController {
  @operation({
    summary: "Get Cf",
  })
  @get()
  static getCf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cf",
  })
  @post("{id}")
  static createCf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
