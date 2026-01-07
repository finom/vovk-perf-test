import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iis")
export default class IisController {
  @operation({
    summary: "Get Iis",
  })
  @get()
  static getIis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iis",
  })
  @post("{id}")
  static createIis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
