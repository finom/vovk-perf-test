import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aky")
export default class AkyController {
  @operation({
    summary: "Get Aky",
  })
  @get()
  static getAky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aky",
  })
  @post("{id}")
  static createAky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
