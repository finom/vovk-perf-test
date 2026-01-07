import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoh")
export default class AohController {
  @operation({
    summary: "Get Aoh",
  })
  @get()
  static getAoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoh",
  })
  @post("{id}")
  static createAoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
