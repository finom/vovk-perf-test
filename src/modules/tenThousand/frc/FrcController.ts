import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frc")
export default class FrcController {
  @operation({
    summary: "Get Frc",
  })
  @get()
  static getFrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frc",
  })
  @post("{id}")
  static createFrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
