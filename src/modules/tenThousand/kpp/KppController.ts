import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpp")
export default class KppController {
  @operation({
    summary: "Get Kpp",
  })
  @get()
  static getKpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpp",
  })
  @post("{id}")
  static createKpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
