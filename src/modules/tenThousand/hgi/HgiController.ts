import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgi")
export default class HgiController {
  @operation({
    summary: "Get Hgi",
  })
  @get()
  static getHgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgi",
  })
  @post("{id}")
  static createHgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
