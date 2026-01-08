import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayh")
export default class AyhController {
  @operation({
    summary: "Get Ayh",
  })
  @get()
  static getAyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayh",
  })
  @post("{id}")
  static createAyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
