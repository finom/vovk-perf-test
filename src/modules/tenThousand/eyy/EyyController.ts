import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyy")
export default class EyyController {
  @operation({
    summary: "Get Eyy",
  })
  @get()
  static getEyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyy",
  })
  @post("{id}")
  static createEyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
