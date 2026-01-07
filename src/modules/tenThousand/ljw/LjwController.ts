import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljw")
export default class LjwController {
  @operation({
    summary: "Get Ljw",
  })
  @get()
  static getLjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljw",
  })
  @post("{id}")
  static createLjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
