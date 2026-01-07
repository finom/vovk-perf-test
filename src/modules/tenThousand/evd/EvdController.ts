import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evd")
export default class EvdController {
  @operation({
    summary: "Get Evd",
  })
  @get()
  static getEvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evd",
  })
  @post("{id}")
  static createEvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
