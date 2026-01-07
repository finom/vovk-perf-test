import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqf")
export default class HqfController {
  @operation({
    summary: "Get Hqf",
  })
  @get()
  static getHqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqf",
  })
  @post("{id}")
  static createHqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
