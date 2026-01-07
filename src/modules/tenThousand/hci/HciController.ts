import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hci")
export default class HciController {
  @operation({
    summary: "Get Hci",
  })
  @get()
  static getHci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hci",
  })
  @post("{id}")
  static createHci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
