import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eri")
export default class EriController {
  @operation({
    summary: "Get Eri",
  })
  @get()
  static getEri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eri",
  })
  @post("{id}")
  static createEri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
