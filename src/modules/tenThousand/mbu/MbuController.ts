import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbu")
export default class MbuController {
  @operation({
    summary: "Get Mbu",
  })
  @get()
  static getMbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbu",
  })
  @post("{id}")
  static createMbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
