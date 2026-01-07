import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lme")
export default class LmeController {
  @operation({
    summary: "Get Lme",
  })
  @get()
  static getLme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lme",
  })
  @post("{id}")
  static createLme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
