import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezp")
export default class EzpController {
  @operation({
    summary: "Get Ezp",
  })
  @get()
  static getEzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezp",
  })
  @post("{id}")
  static createEzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
