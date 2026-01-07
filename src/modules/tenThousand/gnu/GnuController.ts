import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnu")
export default class GnuController {
  @operation({
    summary: "Get Gnu",
  })
  @get()
  static getGnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnu",
  })
  @post("{id}")
  static createGnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
