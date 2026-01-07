import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hej")
export default class HejController {
  @operation({
    summary: "Get Hej",
  })
  @get()
  static getHej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hej",
  })
  @post("{id}")
  static createHej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
