import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itc")
export default class ItcController {
  @operation({
    summary: "Get Itc",
  })
  @get()
  static getItc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itc",
  })
  @post("{id}")
  static createItc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
