import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrf")
export default class NrfController {
  @operation({
    summary: "Get Nrf",
  })
  @get()
  static getNrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrf",
  })
  @post("{id}")
  static createNrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
