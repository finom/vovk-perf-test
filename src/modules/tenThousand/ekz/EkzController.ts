import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekz")
export default class EkzController {
  @operation({
    summary: "Get Ekz",
  })
  @get()
  static getEkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekz",
  })
  @post("{id}")
  static createEkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
