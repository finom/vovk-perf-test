import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kej")
export default class KejController {
  @operation({
    summary: "Get Kej",
  })
  @get()
  static getKej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kej",
  })
  @post("{id}")
  static createKej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
