import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwa")
export default class JwaController {
  @operation({
    summary: "Get Jwa",
  })
  @get()
  static getJwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwa",
  })
  @post("{id}")
  static createJwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
