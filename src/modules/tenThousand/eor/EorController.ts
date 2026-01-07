import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eor")
export default class EorController {
  @operation({
    summary: "Get Eor",
  })
  @get()
  static getEor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eor",
  })
  @post("{id}")
  static createEor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
