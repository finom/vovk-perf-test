import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilp")
export default class IlpController {
  @operation({
    summary: "Get Ilp",
  })
  @get()
  static getIlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilp",
  })
  @post("{id}")
  static createIlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
