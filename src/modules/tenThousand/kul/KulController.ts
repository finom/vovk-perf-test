import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kul")
export default class KulController {
  @operation({
    summary: "Get Kul",
  })
  @get()
  static getKul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kul",
  })
  @post("{id}")
  static createKul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
