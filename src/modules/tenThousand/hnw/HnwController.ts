import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnw")
export default class HnwController {
  @operation({
    summary: "Get Hnw",
  })
  @get()
  static getHnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnw",
  })
  @post("{id}")
  static createHnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
