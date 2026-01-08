import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cod")
export default class CodController {
  @operation({
    summary: "Get Cod",
  })
  @get()
  static getCod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cod",
  })
  @post("{id}")
  static createCod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
