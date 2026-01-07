import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jln")
export default class JlnController {
  @operation({
    summary: "Get Jln",
  })
  @get()
  static getJln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jln",
  })
  @post("{id}")
  static createJln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
