import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dje")
export default class DjeController {
  @operation({
    summary: "Get Dje",
  })
  @get()
  static getDje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dje",
  })
  @post("{id}")
  static createDje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
