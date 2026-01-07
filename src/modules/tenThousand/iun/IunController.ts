import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iun")
export default class IunController {
  @operation({
    summary: "Get Iun",
  })
  @get()
  static getIun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iun",
  })
  @post("{id}")
  static createIun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
