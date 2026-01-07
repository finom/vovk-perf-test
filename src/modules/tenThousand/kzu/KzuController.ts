import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzu")
export default class KzuController {
  @operation({
    summary: "Get Kzu",
  })
  @get()
  static getKzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzu",
  })
  @post("{id}")
  static createKzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
