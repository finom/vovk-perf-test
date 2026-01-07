import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoo")
export default class EooController {
  @operation({
    summary: "Get Eoo",
  })
  @get()
  static getEoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoo",
  })
  @post("{id}")
  static createEoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
