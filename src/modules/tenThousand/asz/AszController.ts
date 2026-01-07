import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asz")
export default class AszController {
  @operation({
    summary: "Get Asz",
  })
  @get()
  static getAsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asz",
  })
  @post("{id}")
  static createAsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
