import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwr")
export default class KwrController {
  @operation({
    summary: "Get Kwr",
  })
  @get()
  static getKwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwr",
  })
  @post("{id}")
  static createKwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
