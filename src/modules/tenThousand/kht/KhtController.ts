import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kht")
export default class KhtController {
  @operation({
    summary: "Get Kht",
  })
  @get()
  static getKht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kht",
  })
  @post("{id}")
  static createKht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
