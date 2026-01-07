import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksd")
export default class KsdController {
  @operation({
    summary: "Get Ksd",
  })
  @get()
  static getKsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksd",
  })
  @post("{id}")
  static createKsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
