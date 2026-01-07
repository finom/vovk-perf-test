import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kec")
export default class KecController {
  @operation({
    summary: "Get Kec",
  })
  @get()
  static getKec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kec",
  })
  @post("{id}")
  static createKec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
