import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kil")
export default class KilController {
  @operation({
    summary: "Get Kil",
  })
  @get()
  static getKil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kil",
  })
  @post("{id}")
  static createKil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
