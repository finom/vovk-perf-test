import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fre")
export default class FreController {
  @operation({
    summary: "Get Fre",
  })
  @get()
  static getFre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fre",
  })
  @post("{id}")
  static createFre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
