import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kld")
export default class KldController {
  @operation({
    summary: "Get Kld",
  })
  @get()
  static getKld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kld",
  })
  @post("{id}")
  static createKld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
