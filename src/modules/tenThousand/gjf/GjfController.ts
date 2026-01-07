import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjf")
export default class GjfController {
  @operation({
    summary: "Get Gjf",
  })
  @get()
  static getGjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjf",
  })
  @post("{id}")
  static createGjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
