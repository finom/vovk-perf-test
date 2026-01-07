import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iff")
export default class IffController {
  @operation({
    summary: "Get Iff",
  })
  @get()
  static getIff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iff",
  })
  @post("{id}")
  static createIff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
