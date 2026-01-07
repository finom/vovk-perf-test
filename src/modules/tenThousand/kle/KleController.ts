import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kle")
export default class KleController {
  @operation({
    summary: "Get Kle",
  })
  @get()
  static getKle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kle",
  })
  @post("{id}")
  static createKle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
