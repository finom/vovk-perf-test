import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aet")
export default class AetController {
  @operation({
    summary: "Get Aet",
  })
  @get()
  static getAet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aet",
  })
  @post("{id}")
  static createAet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
