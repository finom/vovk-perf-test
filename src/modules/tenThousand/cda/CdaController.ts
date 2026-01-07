import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cda")
export default class CdaController {
  @operation({
    summary: "Get Cda",
  })
  @get()
  static getCda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cda",
  })
  @post("{id}")
  static createCda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
