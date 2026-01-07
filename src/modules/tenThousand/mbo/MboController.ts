import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbo")
export default class MboController {
  @operation({
    summary: "Get Mbo",
  })
  @get()
  static getMbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbo",
  })
  @post("{id}")
  static createMbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
