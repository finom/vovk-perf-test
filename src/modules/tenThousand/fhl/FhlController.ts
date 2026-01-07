import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhl")
export default class FhlController {
  @operation({
    summary: "Get Fhl",
  })
  @get()
  static getFhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhl",
  })
  @post("{id}")
  static createFhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
