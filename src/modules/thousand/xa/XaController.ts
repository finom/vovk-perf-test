import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xa")
export default class XaController {
  @operation({
    summary: "Get Xa",
  })
  @get()
  static getXa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xa",
  })
  @post("{id}")
  static createXa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
