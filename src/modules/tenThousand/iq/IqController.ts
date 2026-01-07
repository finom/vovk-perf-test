import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iq")
export default class IqController {
  @operation({
    summary: "Get Iq",
  })
  @get()
  static getIq = procedure({
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
