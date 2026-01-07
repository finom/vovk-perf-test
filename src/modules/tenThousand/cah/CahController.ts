import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cah")
export default class CahController {
  @operation({
    summary: "Get Cah",
  })
  @get()
  static getCah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cah",
  })
  @post("{id}")
  static createCah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
