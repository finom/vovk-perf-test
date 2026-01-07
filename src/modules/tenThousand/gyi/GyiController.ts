import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyi")
export default class GyiController {
  @operation({
    summary: "Get Gyi",
  })
  @get()
  static getGyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyi",
  })
  @post("{id}")
  static createGyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
