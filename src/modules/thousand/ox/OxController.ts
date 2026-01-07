import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ox")
export default class OxController {
  @operation({
    summary: "Get Ox",
  })
  @get()
  static getOx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ox",
  })
  @post("{id}")
  static createOx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
