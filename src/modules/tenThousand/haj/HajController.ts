import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("haj")
export default class HajController {
  @operation({
    summary: "Get Haj",
  })
  @get()
  static getHaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haj",
  })
  @post("{id}")
  static createHaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
