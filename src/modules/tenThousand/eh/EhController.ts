import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eh")
export default class EhController {
  @operation({
    summary: "Get Eh",
  })
  @get()
  static getEh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eh",
  })
  @post("{id}")
  static createEh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
