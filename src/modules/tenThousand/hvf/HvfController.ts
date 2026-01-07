import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvf")
export default class HvfController {
  @operation({
    summary: "Get Hvf",
  })
  @get()
  static getHvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvf",
  })
  @post("{id}")
  static createHvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
