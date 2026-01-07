import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihn")
export default class IhnController {
  @operation({
    summary: "Get Ihn",
  })
  @get()
  static getIhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihn",
  })
  @post("{id}")
  static createIhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
