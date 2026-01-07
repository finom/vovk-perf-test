import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftv")
export default class FtvController {
  @operation({
    summary: "Get Ftv",
  })
  @get()
  static getFtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftv",
  })
  @post("{id}")
  static createFtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
