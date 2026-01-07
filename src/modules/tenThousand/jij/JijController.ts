import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jij")
export default class JijController {
  @operation({
    summary: "Get Jij",
  })
  @get()
  static getJij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jij",
  })
  @post("{id}")
  static createJij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
