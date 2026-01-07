import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kun")
export default class KunController {
  @operation({
    summary: "Get Kun",
  })
  @get()
  static getKun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kun",
  })
  @post("{id}")
  static createKun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
