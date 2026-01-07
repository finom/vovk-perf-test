import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inx")
export default class InxController {
  @operation({
    summary: "Get Inx",
  })
  @get()
  static getInx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inx",
  })
  @post("{id}")
  static createInx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
