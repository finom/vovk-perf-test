import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hno")
export default class HnoController {
  @operation({
    summary: "Get Hno",
  })
  @get()
  static getHno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hno",
  })
  @post("{id}")
  static createHno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
