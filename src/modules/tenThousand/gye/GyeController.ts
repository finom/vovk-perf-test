import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyes")
export default class GyeController {
  @operation({
    summary: "Get Gyes",
  })
  @get()
  static getGyes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gye",
  })
  @post("{id}")
  static createGye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
