import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eir")
export default class EirController {
  @operation({
    summary: "Get Eir",
  })
  @get()
  static getEir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eir",
  })
  @post("{id}")
  static createEir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
