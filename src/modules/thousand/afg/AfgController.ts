import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afg")
export default class AfgController {
  @operation({
    summary: "Get Afg",
  })
  @get()
  static getAfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afg",
  })
  @post("{id}")
  static createAfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
