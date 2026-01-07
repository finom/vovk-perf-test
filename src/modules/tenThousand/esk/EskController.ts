import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esk")
export default class EskController {
  @operation({
    summary: "Get Esk",
  })
  @get()
  static getEsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esk",
  })
  @post("{id}")
  static createEsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
