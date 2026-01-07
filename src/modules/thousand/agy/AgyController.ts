import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agy")
export default class AgyController {
  @operation({
    summary: "Get Agy",
  })
  @get()
  static getAgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agy",
  })
  @post("{id}")
  static createAgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
