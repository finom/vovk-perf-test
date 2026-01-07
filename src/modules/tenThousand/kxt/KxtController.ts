import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxt")
export default class KxtController {
  @operation({
    summary: "Get Kxt",
  })
  @get()
  static getKxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxt",
  })
  @post("{id}")
  static createKxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
