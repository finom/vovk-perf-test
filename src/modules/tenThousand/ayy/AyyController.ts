import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayy")
export default class AyyController {
  @operation({
    summary: "Get Ayy",
  })
  @get()
  static getAyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayy",
  })
  @post("{id}")
  static createAyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
