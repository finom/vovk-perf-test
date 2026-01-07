import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dho")
export default class DhoController {
  @operation({
    summary: "Get Dho",
  })
  @get()
  static getDho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dho",
  })
  @post("{id}")
  static createDho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
