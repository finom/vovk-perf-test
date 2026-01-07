import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bda")
export default class BdaController {
  @operation({
    summary: "Get Bda",
  })
  @get()
  static getBda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bda",
  })
  @post("{id}")
  static createBda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
