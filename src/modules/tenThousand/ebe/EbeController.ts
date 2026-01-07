import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebe")
export default class EbeController {
  @operation({
    summary: "Get Ebe",
  })
  @get()
  static getEbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebe",
  })
  @post("{id}")
  static createEbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
