import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iggs")
export default class IggController {
  @operation({
    summary: "Get Iggs",
  })
  @get()
  static getIggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igg",
  })
  @post("{id}")
  static createIgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
