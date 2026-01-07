import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agp")
export default class AgpController {
  @operation({
    summary: "Get Agp",
  })
  @get()
  static getAgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agp",
  })
  @post("{id}")
  static createAgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
