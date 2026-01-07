import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpl")
export default class KplController {
  @operation({
    summary: "Get Kpl",
  })
  @get()
  static getKpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpl",
  })
  @post("{id}")
  static createKpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
