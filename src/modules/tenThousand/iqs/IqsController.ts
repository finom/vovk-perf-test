import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqs")
export default class IqsController {
  @operation({
    summary: "Get Iqs",
  })
  @get()
  static getIqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqs",
  })
  @post("{id}")
  static createIqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
