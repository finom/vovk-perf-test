import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoo")
export default class AooController {
  @operation({
    summary: "Get Aoo",
  })
  @get()
  static getAoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoo",
  })
  @post("{id}")
  static createAoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
