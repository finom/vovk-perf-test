import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkr")
export default class KkrController {
  @operation({
    summary: "Get Kkr",
  })
  @get()
  static getKkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkr",
  })
  @post("{id}")
  static createKkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
