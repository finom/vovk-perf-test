import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeh")
export default class EehController {
  @operation({
    summary: "Get Eeh",
  })
  @get()
  static getEeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeh",
  })
  @post("{id}")
  static createEeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
