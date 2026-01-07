import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyb")
export default class IybController {
  @operation({
    summary: "Get Iyb",
  })
  @get()
  static getIyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyb",
  })
  @post("{id}")
  static createIyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
