import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhe")
export default class FheController {
  @operation({
    summary: "Get Fhe",
  })
  @get()
  static getFhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhe",
  })
  @post("{id}")
  static createFhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
