import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kac")
export default class KacController {
  @operation({
    summary: "Get Kac",
  })
  @get()
  static getKac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kac",
  })
  @post("{id}")
  static createKac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
