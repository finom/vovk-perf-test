import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrf")
export default class HrfController {
  @operation({
    summary: "Get Hrf",
  })
  @get()
  static getHrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrf",
  })
  @post("{id}")
  static createHrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
