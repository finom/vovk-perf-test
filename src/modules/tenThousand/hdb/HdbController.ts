import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdb")
export default class HdbController {
  @operation({
    summary: "Get Hdb",
  })
  @get()
  static getHdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdb",
  })
  @post("{id}")
  static createHdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
