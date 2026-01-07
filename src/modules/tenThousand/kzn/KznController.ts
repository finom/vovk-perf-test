import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzn")
export default class KznController {
  @operation({
    summary: "Get Kzn",
  })
  @get()
  static getKzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzn",
  })
  @post("{id}")
  static createKzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
