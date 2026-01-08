import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqb")
export default class IqbController {
  @operation({
    summary: "Get Iqb",
  })
  @get()
  static getIqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqb",
  })
  @post("{id}")
  static createIqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
