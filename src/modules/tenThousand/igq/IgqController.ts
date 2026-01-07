import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igq")
export default class IgqController {
  @operation({
    summary: "Get Igq",
  })
  @get()
  static getIgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igq",
  })
  @post("{id}")
  static createIgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
