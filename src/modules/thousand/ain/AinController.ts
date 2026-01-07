import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ain")
export default class AinController {
  @operation({
    summary: "Get Ain",
  })
  @get()
  static getAin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ain",
  })
  @post("{id}")
  static createAin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
