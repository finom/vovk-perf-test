import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klt")
export default class KltController {
  @operation({
    summary: "Get Klt",
  })
  @get()
  static getKlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klt",
  })
  @post("{id}")
  static createKlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
