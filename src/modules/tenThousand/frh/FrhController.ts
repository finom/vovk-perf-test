import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frh")
export default class FrhController {
  @operation({
    summary: "Get Frh",
  })
  @get()
  static getFrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frh",
  })
  @post("{id}")
  static createFrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
