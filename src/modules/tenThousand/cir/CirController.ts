import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cir")
export default class CirController {
  @operation({
    summary: "Get Cir",
  })
  @get()
  static getCir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cir",
  })
  @post("{id}")
  static createCir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
