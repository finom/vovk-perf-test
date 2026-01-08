import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msj")
export default class MsjController {
  @operation({
    summary: "Get Msj",
  })
  @get()
  static getMsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msj",
  })
  @post("{id}")
  static createMsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
