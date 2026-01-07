import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dif")
export default class DifController {
  @operation({
    summary: "Get Dif",
  })
  @get()
  static getDif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dif",
  })
  @post("{id}")
  static createDif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
