import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jje")
export default class JjeController {
  @operation({
    summary: "Get Jje",
  })
  @get()
  static getJje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jje",
  })
  @post("{id}")
  static createJje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
