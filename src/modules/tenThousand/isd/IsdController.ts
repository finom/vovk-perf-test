import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isd")
export default class IsdController {
  @operation({
    summary: "Get Isd",
  })
  @get()
  static getIsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isd",
  })
  @post("{id}")
  static createIsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
