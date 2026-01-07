import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqi")
export default class KqiController {
  @operation({
    summary: "Get Kqi",
  })
  @get()
  static getKqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqi",
  })
  @post("{id}")
  static createKqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
