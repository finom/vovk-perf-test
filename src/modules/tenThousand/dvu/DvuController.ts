import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvu")
export default class DvuController {
  @operation({
    summary: "Get Dvu",
  })
  @get()
  static getDvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvu",
  })
  @post("{id}")
  static createDvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
