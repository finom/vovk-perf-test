import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iin")
export default class IinController {
  @operation({
    summary: "Get Iin",
  })
  @get()
  static getIin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iin",
  })
  @post("{id}")
  static createIin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
