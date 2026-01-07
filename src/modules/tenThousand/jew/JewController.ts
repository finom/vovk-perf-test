import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jew")
export default class JewController {
  @operation({
    summary: "Get Jew",
  })
  @get()
  static getJew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jew",
  })
  @post("{id}")
  static createJew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
