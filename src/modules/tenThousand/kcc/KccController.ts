import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcc")
export default class KccController {
  @operation({
    summary: "Get Kcc",
  })
  @get()
  static getKcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcc",
  })
  @post("{id}")
  static createKcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
