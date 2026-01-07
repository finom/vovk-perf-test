import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exf")
export default class ExfController {
  @operation({
    summary: "Get Exf",
  })
  @get()
  static getExf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exf",
  })
  @post("{id}")
  static createExf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
