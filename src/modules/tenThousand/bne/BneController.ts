import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bne")
export default class BneController {
  @operation({
    summary: "Get Bne",
  })
  @get()
  static getBne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bne",
  })
  @post("{id}")
  static createBne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
