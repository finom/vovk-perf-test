import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dao")
export default class DaoController {
  @operation({
    summary: "Get Dao",
  })
  @get()
  static getDao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dao",
  })
  @post("{id}")
  static createDao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
