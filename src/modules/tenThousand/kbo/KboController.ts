import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbo")
export default class KboController {
  @operation({
    summary: "Get Kbo",
  })
  @get()
  static getKbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbo",
  })
  @post("{id}")
  static createKbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
