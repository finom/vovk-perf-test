import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqs")
export default class IqController {
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
    summary: "Create Iq",
  })
  @post("{id}")
  static createIq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
