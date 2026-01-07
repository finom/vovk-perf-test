import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kli")
export default class KliController {
  @operation({
    summary: "Get Kli",
  })
  @get()
  static getKli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kli",
  })
  @post("{id}")
  static createKli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
