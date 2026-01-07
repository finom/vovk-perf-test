import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aay")
export default class AayController {
  @operation({
    summary: "Get Aay",
  })
  @get()
  static getAay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aay",
  })
  @post("{id}")
  static createAay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
