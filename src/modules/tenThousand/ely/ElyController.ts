import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ely")
export default class ElyController {
  @operation({
    summary: "Get Ely",
  })
  @get()
  static getEly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ely",
  })
  @post("{id}")
  static createEly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
