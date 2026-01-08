import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lna")
export default class LnaController {
  @operation({
    summary: "Get Lna",
  })
  @get()
  static getLna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lna",
  })
  @post("{id}")
  static createLna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
