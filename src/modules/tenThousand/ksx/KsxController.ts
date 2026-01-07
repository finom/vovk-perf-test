import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksx")
export default class KsxController {
  @operation({
    summary: "Get Ksx",
  })
  @get()
  static getKsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksx",
  })
  @post("{id}")
  static createKsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
