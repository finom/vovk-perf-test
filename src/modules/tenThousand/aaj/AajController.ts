import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aaj")
export default class AajController {
  @operation({
    summary: "Get Aaj",
  })
  @get()
  static getAaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaj",
  })
  @post("{id}")
  static createAaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
