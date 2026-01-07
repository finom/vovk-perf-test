import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvj")
export default class HvjController {
  @operation({
    summary: "Get Hvj",
  })
  @get()
  static getHvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvj",
  })
  @post("{id}")
  static createHvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
