import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eup")
export default class EupController {
  @operation({
    summary: "Get Eup",
  })
  @get()
  static getEup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eup",
  })
  @post("{id}")
  static createEup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
