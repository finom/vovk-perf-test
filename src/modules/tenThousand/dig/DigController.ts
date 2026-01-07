import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dig")
export default class DigController {
  @operation({
    summary: "Get Dig",
  })
  @get()
  static getDig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dig",
  })
  @post("{id}")
  static createDig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
