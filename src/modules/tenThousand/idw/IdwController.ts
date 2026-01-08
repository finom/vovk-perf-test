import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idw")
export default class IdwController {
  @operation({
    summary: "Get Idw",
  })
  @get()
  static getIdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idw",
  })
  @post("{id}")
  static createIdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
