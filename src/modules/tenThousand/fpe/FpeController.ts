import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpe")
export default class FpeController {
  @operation({
    summary: "Get Fpe",
  })
  @get()
  static getFpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpe",
  })
  @post("{id}")
  static createFpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
