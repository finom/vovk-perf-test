import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izi")
export default class IziController {
  @operation({
    summary: "Get Izi",
  })
  @get()
  static getIzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izi",
  })
  @post("{id}")
  static createIzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
