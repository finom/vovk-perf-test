import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krr")
export default class KrrController {
  @operation({
    summary: "Get Krr",
  })
  @get()
  static getKrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krr",
  })
  @post("{id}")
  static createKrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
