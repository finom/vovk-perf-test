import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfc")
export default class KfcController {
  @operation({
    summary: "Get Kfc",
  })
  @get()
  static getKfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfc",
  })
  @post("{id}")
  static createKfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
