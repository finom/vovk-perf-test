import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nct")
export default class NctController {
  @operation({
    summary: "Get Nct",
  })
  @get()
  static getNct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nct",
  })
  @post("{id}")
  static createNct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
