import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqi")
export default class AqiController {
  @operation({
    summary: "Get Aqi",
  })
  @get()
  static getAqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqi",
  })
  @post("{id}")
  static createAqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
