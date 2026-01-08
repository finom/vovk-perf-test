import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kja")
export default class KjaController {
  @operation({
    summary: "Get Kja",
  })
  @get()
  static getKja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kja",
  })
  @post("{id}")
  static createKja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
