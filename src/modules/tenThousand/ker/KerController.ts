import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ker")
export default class KerController {
  @operation({
    summary: "Get Ker",
  })
  @get()
  static getKer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ker",
  })
  @post("{id}")
  static createKer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
