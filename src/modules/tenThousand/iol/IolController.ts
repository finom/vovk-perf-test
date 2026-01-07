import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iol")
export default class IolController {
  @operation({
    summary: "Get Iol",
  })
  @get()
  static getIol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iol",
  })
  @post("{id}")
  static createIol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
