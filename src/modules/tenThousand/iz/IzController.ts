import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iz")
export default class IzController {
  @operation({
    summary: "Get Iz",
  })
  @get()
  static getIz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iz",
  })
  @post("{id}")
  static createIz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
