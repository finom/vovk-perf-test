import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azj")
export default class AzjController {
  @operation({
    summary: "Get Azj",
  })
  @get()
  static getAzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azj",
  })
  @post("{id}")
  static createAzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
