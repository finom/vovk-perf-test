import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaa")
export default class EaaController {
  @operation({
    summary: "Get Eaa",
  })
  @get()
  static getEaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eaa",
  })
  @post("{id}")
  static createEaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
