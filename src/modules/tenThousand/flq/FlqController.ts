import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flq")
export default class FlqController {
  @operation({
    summary: "Get Flq",
  })
  @get()
  static getFlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flq",
  })
  @post("{id}")
  static createFlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
