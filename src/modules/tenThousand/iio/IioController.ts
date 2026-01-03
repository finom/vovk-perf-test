import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iios")
export default class IioController {
  @operation({
    summary: "Get Iios",
  })
  @get()
  static getIios = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iio",
  })
  @post("{id}")
  static createIio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
