import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hijs")
export default class HijController {
  @operation({
    summary: "Get Hijs",
  })
  @get()
  static getHijs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hij",
  })
  @post("{id}")
  static createHij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
