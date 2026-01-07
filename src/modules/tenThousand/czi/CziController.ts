import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czi")
export default class CziController {
  @operation({
    summary: "Get Czi",
  })
  @get()
  static getCzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czi",
  })
  @post("{id}")
  static createCzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
