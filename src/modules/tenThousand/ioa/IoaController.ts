import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioa")
export default class IoaController {
  @operation({
    summary: "Get Ioa",
  })
  @get()
  static getIoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioa",
  })
  @post("{id}")
  static createIoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
