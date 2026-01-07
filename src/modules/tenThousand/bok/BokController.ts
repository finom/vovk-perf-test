import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bok")
export default class BokController {
  @operation({
    summary: "Get Bok",
  })
  @get()
  static getBok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bok",
  })
  @post("{id}")
  static createBok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
