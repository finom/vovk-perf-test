import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaf")
export default class GafController {
  @operation({
    summary: "Get Gaf",
  })
  @get()
  static getGaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gaf",
  })
  @post("{id}")
  static createGaf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
