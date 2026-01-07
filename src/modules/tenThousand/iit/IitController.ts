import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iit")
export default class IitController {
  @operation({
    summary: "Get Iit",
  })
  @get()
  static getIit = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iit",
  })
  @post("{id}")
  static createIit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
