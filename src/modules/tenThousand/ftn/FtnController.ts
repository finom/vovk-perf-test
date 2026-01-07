import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftn")
export default class FtnController {
  @operation({
    summary: "Get Ftn",
  })
  @get()
  static getFtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftn",
  })
  @post("{id}")
  static createFtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
