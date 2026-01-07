import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diu")
export default class DiuController {
  @operation({
    summary: "Get Diu",
  })
  @get()
  static getDiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Diu",
  })
  @post("{id}")
  static createDiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
