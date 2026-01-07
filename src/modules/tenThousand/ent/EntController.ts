import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ent")
export default class EntController {
  @operation({
    summary: "Get Ent",
  })
  @get()
  static getEnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ent",
  })
  @post("{id}")
  static createEnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
