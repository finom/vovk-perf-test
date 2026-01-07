import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvo")
export default class LvoController {
  @operation({
    summary: "Get Lvo",
  })
  @get()
  static getLvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvo",
  })
  @post("{id}")
  static createLvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
