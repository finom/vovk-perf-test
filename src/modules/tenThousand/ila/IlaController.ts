import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ila")
export default class IlaController {
  @operation({
    summary: "Get Ila",
  })
  @get()
  static getIla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ila",
  })
  @post("{id}")
  static createIla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
