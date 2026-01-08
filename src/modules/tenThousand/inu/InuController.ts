import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inu")
export default class InuController {
  @operation({
    summary: "Get Inu",
  })
  @get()
  static getInu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inu",
  })
  @post("{id}")
  static createInu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
