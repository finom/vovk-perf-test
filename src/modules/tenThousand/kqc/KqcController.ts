import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqc")
export default class KqcController {
  @operation({
    summary: "Get Kqc",
  })
  @get()
  static getKqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqc",
  })
  @post("{id}")
  static createKqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
