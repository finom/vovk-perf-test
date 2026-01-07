import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqf")
export default class AqfController {
  @operation({
    summary: "Get Aqf",
  })
  @get()
  static getAqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqf",
  })
  @post("{id}")
  static createAqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
