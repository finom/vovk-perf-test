import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsu")
export default class GsuController {
  @operation({
    summary: "Get Gsu",
  })
  @get()
  static getGsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsu",
  })
  @post("{id}")
  static createGsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
