import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inu")
export default class InuController {
  @operation({
    summary: "Get Inu",
  })
  @get()
  static getInu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inu",
  })
  @post("{id}")
  static createInu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
