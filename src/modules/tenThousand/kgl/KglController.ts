import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgl")
export default class KglController {
  @operation({
    summary: "Get Kgl",
  })
  @get()
  static getKgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgl",
  })
  @post("{id}")
  static createKgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
