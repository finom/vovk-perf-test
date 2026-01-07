import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igi")
export default class IgiController {
  @operation({
    summary: "Get Igi",
  })
  @get()
  static getIgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igi",
  })
  @post("{id}")
  static createIgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
