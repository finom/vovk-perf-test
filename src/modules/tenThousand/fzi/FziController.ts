import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzi")
export default class FziController {
  @operation({
    summary: "Get Fzi",
  })
  @get()
  static getFzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzi",
  })
  @post("{id}")
  static createFzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
