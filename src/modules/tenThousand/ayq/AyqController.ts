import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayq")
export default class AyqController {
  @operation({
    summary: "Get Ayq",
  })
  @get()
  static getAyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayq",
  })
  @post("{id}")
  static createAyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
