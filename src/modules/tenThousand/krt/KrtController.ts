import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krt")
export default class KrtController {
  @operation({
    summary: "Get Krt",
  })
  @get()
  static getKrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krt",
  })
  @post("{id}")
  static createKrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
