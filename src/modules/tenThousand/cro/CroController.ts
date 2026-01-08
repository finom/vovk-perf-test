import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cro")
export default class CroController {
  @operation({
    summary: "Get Cro",
  })
  @get()
  static getCro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cro",
  })
  @post("{id}")
  static createCro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
