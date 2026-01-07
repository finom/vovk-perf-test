import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnh")
export default class MnhController {
  @operation({
    summary: "Get Mnh",
  })
  @get()
  static getMnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnh",
  })
  @post("{id}")
  static createMnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
