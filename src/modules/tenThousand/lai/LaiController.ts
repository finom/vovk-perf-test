import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lai")
export default class LaiController {
  @operation({
    summary: "Get Lai",
  })
  @get()
  static getLai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lai",
  })
  @post("{id}")
  static createLai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
