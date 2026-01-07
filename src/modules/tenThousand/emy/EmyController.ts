import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emy")
export default class EmyController {
  @operation({
    summary: "Get Emy",
  })
  @get()
  static getEmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emy",
  })
  @post("{id}")
  static createEmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
