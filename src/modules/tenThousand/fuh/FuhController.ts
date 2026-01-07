import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuh")
export default class FuhController {
  @operation({
    summary: "Get Fuh",
  })
  @get()
  static getFuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuh",
  })
  @post("{id}")
  static createFuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
