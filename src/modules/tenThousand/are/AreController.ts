import { procedure, prefix, get, post, operation } from "vovk";

@prefix("are")
export default class AreController {
  @operation({
    summary: "Get Are",
  })
  @get()
  static getAre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Are",
  })
  @post("{id}")
  static createAre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
