import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgo")
export default class MgoController {
  @operation({
    summary: "Get Mgo",
  })
  @get()
  static getMgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgo",
  })
  @post("{id}")
  static createMgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
