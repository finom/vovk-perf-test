import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpg")
export default class JpgController {
  @operation({
    summary: "Get Jpg",
  })
  @get()
  static getJpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpg",
  })
  @post("{id}")
  static createJpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
