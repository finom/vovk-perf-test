import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kik")
export default class KikController {
  @operation({
    summary: "Get Kik",
  })
  @get()
  static getKik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kik",
  })
  @post("{id}")
  static createKik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
