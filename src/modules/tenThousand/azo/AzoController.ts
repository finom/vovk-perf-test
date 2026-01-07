import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azo")
export default class AzoController {
  @operation({
    summary: "Get Azo",
  })
  @get()
  static getAzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azo",
  })
  @post("{id}")
  static createAzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
