import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
