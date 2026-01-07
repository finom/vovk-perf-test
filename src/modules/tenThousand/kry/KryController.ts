import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kry")
export default class KryController {
  @operation({
    summary: "Get Kry",
  })
  @get()
  static getKry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kry",
  })
  @post("{id}")
  static createKry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
