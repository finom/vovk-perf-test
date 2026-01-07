import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bej")
export default class BejController {
  @operation({
    summary: "Get Bej",
  })
  @get()
  static getBej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bej",
  })
  @post("{id}")
  static createBej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
