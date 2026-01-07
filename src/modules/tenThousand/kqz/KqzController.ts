import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqz")
export default class KqzController {
  @operation({
    summary: "Get Kqz",
  })
  @get()
  static getKqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqz",
  })
  @post("{id}")
  static createKqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
