import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaf")
export default class IafController {
  @operation({
    summary: "Get Iaf",
  })
  @get()
  static getIaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iaf",
  })
  @post("{id}")
  static createIaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
