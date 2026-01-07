import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuc")
export default class KucController {
  @operation({
    summary: "Get Kuc",
  })
  @get()
  static getKuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuc",
  })
  @post("{id}")
  static createKuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
