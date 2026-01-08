import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fos")
export default class FosController {
  @operation({
    summary: "Get Fos",
  })
  @get()
  static getFos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fos",
  })
  @post("{id}")
  static createFos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
