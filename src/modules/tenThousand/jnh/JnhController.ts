import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnh")
export default class JnhController {
  @operation({
    summary: "Get Jnh",
  })
  @get()
  static getJnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnh",
  })
  @post("{id}")
  static createJnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
