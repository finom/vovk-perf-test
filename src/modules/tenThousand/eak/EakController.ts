import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eak")
export default class EakController {
  @operation({
    summary: "Get Eak",
  })
  @get()
  static getEak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eak",
  })
  @post("{id}")
  static createEak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
