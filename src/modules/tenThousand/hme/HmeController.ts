import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hme")
export default class HmeController {
  @operation({
    summary: "Get Hme",
  })
  @get()
  static getHme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hme",
  })
  @post("{id}")
  static createHme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
