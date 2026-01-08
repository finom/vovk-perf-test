import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqt")
export default class LqtController {
  @operation({
    summary: "Get Lqt",
  })
  @get()
  static getLqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqt",
  })
  @post("{id}")
  static createLqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
