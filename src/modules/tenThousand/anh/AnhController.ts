import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anh")
export default class AnhController {
  @operation({
    summary: "Get Anh",
  })
  @get()
  static getAnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anh",
  })
  @post("{id}")
  static createAnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
