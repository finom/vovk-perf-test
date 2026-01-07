import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzi")
export default class DziController {
  @operation({
    summary: "Get Dzi",
  })
  @get()
  static getDzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzi",
  })
  @post("{id}")
  static createDzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
