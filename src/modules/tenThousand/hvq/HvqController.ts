import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvq")
export default class HvqController {
  @operation({
    summary: "Get Hvq",
  })
  @get()
  static getHvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvq",
  })
  @post("{id}")
  static createHvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
