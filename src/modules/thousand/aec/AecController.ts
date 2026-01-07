import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aec")
export default class AecController {
  @operation({
    summary: "Get Aec",
  })
  @get()
  static getAec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aec",
  })
  @post("{id}")
  static createAec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
