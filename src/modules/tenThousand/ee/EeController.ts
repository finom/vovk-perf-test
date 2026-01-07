import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ee")
export default class EeController {
  @operation({
    summary: "Get Ee",
  })
  @get()
  static getEe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ee",
  })
  @post("{id}")
  static createEe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
