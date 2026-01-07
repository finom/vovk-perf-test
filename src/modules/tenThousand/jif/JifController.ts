import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jif")
export default class JifController {
  @operation({
    summary: "Get Jif",
  })
  @get()
  static getJif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jif",
  })
  @post("{id}")
  static createJif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
