import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hau")
export default class HauController {
  @operation({
    summary: "Get Hau",
  })
  @get()
  static getHau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hau",
  })
  @post("{id}")
  static createHau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
