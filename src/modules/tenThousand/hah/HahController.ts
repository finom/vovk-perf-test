import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hah")
export default class HahController {
  @operation({
    summary: "Get Hah",
  })
  @get()
  static getHah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hah",
  })
  @post("{id}")
  static createHah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
