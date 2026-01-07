import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cri")
export default class CriController {
  @operation({
    summary: "Get Cri",
  })
  @get()
  static getCri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cri",
  })
  @post("{id}")
  static createCri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
