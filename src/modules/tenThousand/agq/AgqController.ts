import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agq")
export default class AgqController {
  @operation({
    summary: "Get Agq",
  })
  @get()
  static getAgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agq",
  })
  @post("{id}")
  static createAgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
