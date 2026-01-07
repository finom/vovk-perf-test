import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbh")
export default class KbhController {
  @operation({
    summary: "Get Kbh",
  })
  @get()
  static getKbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbh",
  })
  @post("{id}")
  static createKbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
