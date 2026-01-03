import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibqs")
export default class IbqController {
  @operation({
    summary: "Get Ibqs",
  })
  @get()
  static getIbqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibq",
  })
  @post("{id}")
  static createIbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
