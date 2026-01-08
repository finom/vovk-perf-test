import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lul")
export default class LulController {
  @operation({
    summary: "Get Lul",
  })
  @get()
  static getLul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lul",
  })
  @post("{id}")
  static createLul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
