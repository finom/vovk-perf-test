import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqu")
export default class AquController {
  @operation({
    summary: "Get Aqu",
  })
  @get()
  static getAqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqu",
  })
  @post("{id}")
  static createAqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
