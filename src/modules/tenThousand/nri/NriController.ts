import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nri")
export default class NriController {
  @operation({
    summary: "Get Nri",
  })
  @get()
  static getNri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nri",
  })
  @post("{id}")
  static createNri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
