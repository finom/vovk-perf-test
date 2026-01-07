import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kod")
export default class KodController {
  @operation({
    summary: "Get Kod",
  })
  @get()
  static getKod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kod",
  })
  @post("{id}")
  static createKod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
