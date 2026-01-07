import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agi")
export default class AgiController {
  @operation({
    summary: "Get Agi",
  })
  @get()
  static getAgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agi",
  })
  @post("{id}")
  static createAgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
