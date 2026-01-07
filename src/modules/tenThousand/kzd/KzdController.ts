import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzd")
export default class KzdController {
  @operation({
    summary: "Get Kzd",
  })
  @get()
  static getKzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzd",
  })
  @post("{id}")
  static createKzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
