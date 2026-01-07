import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmj")
export default class DmjController {
  @operation({
    summary: "Get Dmj",
  })
  @get()
  static getDmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmj",
  })
  @post("{id}")
  static createDmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
