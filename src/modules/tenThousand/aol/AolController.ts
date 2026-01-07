import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aol")
export default class AolController {
  @operation({
    summary: "Get Aol",
  })
  @get()
  static getAol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aol",
  })
  @post("{id}")
  static createAol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
