import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lri")
export default class LriController {
  @operation({
    summary: "Get Lri",
  })
  @get()
  static getLri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lri",
  })
  @post("{id}")
  static createLri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
