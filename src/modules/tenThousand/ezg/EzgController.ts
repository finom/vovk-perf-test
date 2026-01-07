import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezg")
export default class EzgController {
  @operation({
    summary: "Get Ezg",
  })
  @get()
  static getEzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezg",
  })
  @post("{id}")
  static createEzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
