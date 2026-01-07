import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ju")
export default class JuController {
  @operation({
    summary: "Get Ju",
  })
  @get()
  static getJu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ju",
  })
  @post("{id}")
  static createJu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
