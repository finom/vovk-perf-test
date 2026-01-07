import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjy")
export default class HjyController {
  @operation({
    summary: "Get Hjy",
  })
  @get()
  static getHjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjy",
  })
  @post("{id}")
  static createHjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
