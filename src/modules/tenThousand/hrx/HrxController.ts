import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrx")
export default class HrxController {
  @operation({
    summary: "Get Hrx",
  })
  @get()
  static getHrx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrx",
  })
  @post("{id}")
  static createHrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
