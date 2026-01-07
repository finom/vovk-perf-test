import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilc")
export default class IlcController {
  @operation({
    summary: "Get Ilc",
  })
  @get()
  static getIlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilc",
  })
  @post("{id}")
  static createIlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
