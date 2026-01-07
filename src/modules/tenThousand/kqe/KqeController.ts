import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqe")
export default class KqeController {
  @operation({
    summary: "Get Kqe",
  })
  @get()
  static getKqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqe",
  })
  @post("{id}")
  static createKqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
