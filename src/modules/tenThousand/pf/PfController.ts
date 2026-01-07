import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pf")
export default class PfController {
  @operation({
    summary: "Get Pf",
  })
  @get()
  static getPf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pf",
  })
  @post("{id}")
  static createPf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
