import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmj")
export default class NmjController {
  @operation({
    summary: "Get Nmj",
  })
  @get()
  static getNmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmj",
  })
  @post("{id}")
  static createNmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
