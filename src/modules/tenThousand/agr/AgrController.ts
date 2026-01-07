import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agr")
export default class AgrController {
  @operation({
    summary: "Get Agr",
  })
  @get()
  static getAgr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agr",
  })
  @post("{id}")
  static createAgr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
