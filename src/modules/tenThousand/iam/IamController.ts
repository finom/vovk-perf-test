import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iam")
export default class IamController {
  @operation({
    summary: "Get Iam",
  })
  @get()
  static getIam = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iam",
  })
  @post("{id}")
  static createIam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
