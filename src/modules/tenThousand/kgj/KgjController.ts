import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgj")
export default class KgjController {
  @operation({
    summary: "Get Kgj",
  })
  @get()
  static getKgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgj",
  })
  @post("{id}")
  static createKgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
