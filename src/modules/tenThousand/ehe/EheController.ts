import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehe")
export default class EheController {
  @operation({
    summary: "Get Ehe",
  })
  @get()
  static getEhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehe",
  })
  @post("{id}")
  static createEhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
