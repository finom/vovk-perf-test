import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuz")
export default class KuzController {
  @operation({
    summary: "Get Kuz",
  })
  @get()
  static getKuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuz",
  })
  @post("{id}")
  static createKuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
