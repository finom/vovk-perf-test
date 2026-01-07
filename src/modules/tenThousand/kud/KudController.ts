import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kud")
export default class KudController {
  @operation({
    summary: "Get Kud",
  })
  @get()
  static getKud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kud",
  })
  @post("{id}")
  static createKud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
