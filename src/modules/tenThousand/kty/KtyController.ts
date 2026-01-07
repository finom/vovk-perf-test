import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kty")
export default class KtyController {
  @operation({
    summary: "Get Kty",
  })
  @get()
  static getKty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kty",
  })
  @post("{id}")
  static createKty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
