import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tr")
export default class TrController {
  @operation({
    summary: "Get Tr",
  })
  @get()
  static getTr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tr",
  })
  @post("{id}")
  static createTr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
