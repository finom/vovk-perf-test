import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atc")
export default class AtcController {
  @operation({
    summary: "Get Atc",
  })
  @get()
  static getAtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atc",
  })
  @post("{id}")
  static createAtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
