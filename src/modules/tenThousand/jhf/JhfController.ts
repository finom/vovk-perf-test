import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhf")
export default class JhfController {
  @operation({
    summary: "Get Jhf",
  })
  @get()
  static getJhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhf",
  })
  @post("{id}")
  static createJhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
