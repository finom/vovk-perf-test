import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdi")
export default class KdiController {
  @operation({
    summary: "Get Kdi",
  })
  @get()
  static getKdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdi",
  })
  @post("{id}")
  static createKdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
