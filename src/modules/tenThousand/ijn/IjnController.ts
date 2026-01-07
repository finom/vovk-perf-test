import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijn")
export default class IjnController {
  @operation({
    summary: "Get Ijn",
  })
  @get()
  static getIjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijn",
  })
  @post("{id}")
  static createIjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
