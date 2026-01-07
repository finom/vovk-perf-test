import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyd")
export default class KydController {
  @operation({
    summary: "Get Kyd",
  })
  @get()
  static getKyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyd",
  })
  @post("{id}")
  static createKyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
