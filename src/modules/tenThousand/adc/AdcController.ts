import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adc")
export default class AdcController {
  @operation({
    summary: "Get Adc",
  })
  @get()
  static getAdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adc",
  })
  @post("{id}")
  static createAdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
