import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvo")
export default class FvoController {
  @operation({
    summary: "Get Fvo",
  })
  @get()
  static getFvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvo",
  })
  @post("{id}")
  static createFvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
