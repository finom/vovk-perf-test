import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iur")
export default class IurController {
  @operation({
    summary: "Get Iur",
  })
  @get()
  static getIur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iur",
  })
  @post("{id}")
  static createIur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
