import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idm")
export default class IdmController {
  @operation({
    summary: "Get Idm",
  })
  @get()
  static getIdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idm",
  })
  @post("{id}")
  static createIdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
