import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyf")
export default class KyfController {
  @operation({
    summary: "Get Kyf",
  })
  @get()
  static getKyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyf",
  })
  @post("{id}")
  static createKyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
