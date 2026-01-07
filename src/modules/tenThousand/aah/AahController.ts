import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aah")
export default class AahController {
  @operation({
    summary: "Get Aah",
  })
  @get()
  static getAah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aah",
  })
  @post("{id}")
  static createAah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
