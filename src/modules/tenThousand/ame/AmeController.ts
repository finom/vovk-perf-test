import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ame")
export default class AmeController {
  @operation({
    summary: "Get Ame",
  })
  @get()
  static getAme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ame",
  })
  @post("{id}")
  static createAme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
