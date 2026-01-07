import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnu")
export default class JnuController {
  @operation({
    summary: "Get Jnu",
  })
  @get()
  static getJnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnu",
  })
  @post("{id}")
  static createJnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
