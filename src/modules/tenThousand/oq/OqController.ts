import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oq")
export default class OqController {
  @operation({
    summary: "Get Oq",
  })
  @get()
  static getOq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oq",
  })
  @post("{id}")
  static createOq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
