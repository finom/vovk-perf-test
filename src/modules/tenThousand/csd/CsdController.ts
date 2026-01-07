import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csd")
export default class CsdController {
  @operation({
    summary: "Get Csd",
  })
  @get()
  static getCsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csd",
  })
  @post("{id}")
  static createCsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
