import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cou")
export default class CouController {
  @operation({
    summary: "Get Cou",
  })
  @get()
  static getCou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cou",
  })
  @post("{id}")
  static createCou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
