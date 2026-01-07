import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huj")
export default class HujController {
  @operation({
    summary: "Get Huj",
  })
  @get()
  static getHuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huj",
  })
  @post("{id}")
  static createHuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
