import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyt")
export default class KytController {
  @operation({
    summary: "Get Kyt",
  })
  @get()
  static getKyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyt",
  })
  @post("{id}")
  static createKyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
