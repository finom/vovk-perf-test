import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehn")
export default class EhnController {
  @operation({
    summary: "Get Ehn",
  })
  @get()
  static getEhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehn",
  })
  @post("{id}")
  static createEhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
