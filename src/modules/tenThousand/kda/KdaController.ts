import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kda")
export default class KdaController {
  @operation({
    summary: "Get Kda",
  })
  @get()
  static getKda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kda",
  })
  @post("{id}")
  static createKda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
