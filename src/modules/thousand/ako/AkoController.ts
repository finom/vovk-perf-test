import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ako")
export default class AkoController {
  @operation({
    summary: "Get Ako",
  })
  @get()
  static getAko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ako",
  })
  @post("{id}")
  static createAko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
