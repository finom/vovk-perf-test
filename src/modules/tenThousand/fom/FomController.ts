import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fom")
export default class FomController {
  @operation({
    summary: "Get Fom",
  })
  @get()
  static getFom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fom",
  })
  @post("{id}")
  static createFom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
