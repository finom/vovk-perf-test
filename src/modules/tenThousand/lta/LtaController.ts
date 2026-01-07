import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lta")
export default class LtaController {
  @operation({
    summary: "Get Lta",
  })
  @get()
  static getLta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lta",
  })
  @post("{id}")
  static createLta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
