import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bka")
export default class BkaController {
  @operation({
    summary: "Get Bka",
  })
  @get()
  static getBka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bka",
  })
  @post("{id}")
  static createBka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
