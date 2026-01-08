import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krf")
export default class KrfController {
  @operation({
    summary: "Get Krf",
  })
  @get()
  static getKrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krf",
  })
  @post("{id}")
  static createKrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
