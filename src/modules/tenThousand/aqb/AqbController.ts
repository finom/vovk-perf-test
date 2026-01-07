import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqb")
export default class AqbController {
  @operation({
    summary: "Get Aqb",
  })
  @get()
  static getAqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqb",
  })
  @post("{id}")
  static createAqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
