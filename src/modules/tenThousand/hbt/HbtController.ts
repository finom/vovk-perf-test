import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbt")
export default class HbtController {
  @operation({
    summary: "Get Hbt",
  })
  @get()
  static getHbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbt",
  })
  @post("{id}")
  static createHbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
