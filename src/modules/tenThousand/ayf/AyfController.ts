import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayf")
export default class AyfController {
  @operation({
    summary: "Get Ayf",
  })
  @get()
  static getAyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayf",
  })
  @post("{id}")
  static createAyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
