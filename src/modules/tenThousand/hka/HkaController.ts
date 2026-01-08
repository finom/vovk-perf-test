import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hka")
export default class HkaController {
  @operation({
    summary: "Get Hka",
  })
  @get()
  static getHka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hka",
  })
  @post("{id}")
  static createHka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
