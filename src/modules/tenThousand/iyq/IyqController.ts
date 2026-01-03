import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyqs")
export default class IyqController {
  @operation({
    summary: "Get Iyqs",
  })
  @get()
  static getIyqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyq",
  })
  @post("{id}")
  static createIyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
