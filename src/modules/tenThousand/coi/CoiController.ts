import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coi")
export default class CoiController {
  @operation({
    summary: "Get Coi",
  })
  @get()
  static getCoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coi",
  })
  @post("{id}")
  static createCoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
