import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irf")
export default class IrfController {
  @operation({
    summary: "Get Irf",
  })
  @get()
  static getIrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irf",
  })
  @post("{id}")
  static createIrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
