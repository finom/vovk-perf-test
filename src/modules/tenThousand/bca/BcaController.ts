import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bca")
export default class BcaController {
  @operation({
    summary: "Get Bca",
  })
  @get()
  static getBca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bca",
  })
  @post("{id}")
  static createBca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
