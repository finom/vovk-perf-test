import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acs")
export default class AcsController {
  @operation({
    summary: "Get Acs",
  })
  @get()
  static getAcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acs",
  })
  @post("{id}")
  static createAcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
