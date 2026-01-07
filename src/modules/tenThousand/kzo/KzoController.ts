import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzo")
export default class KzoController {
  @operation({
    summary: "Get Kzo",
  })
  @get()
  static getKzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzo",
  })
  @post("{id}")
  static createKzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
