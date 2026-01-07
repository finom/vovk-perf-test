import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aft")
export default class AftController {
  @operation({
    summary: "Get Aft",
  })
  @get()
  static getAft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aft",
  })
  @post("{id}")
  static createAft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
