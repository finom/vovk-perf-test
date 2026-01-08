import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adt")
export default class AdtController {
  @operation({
    summary: "Get Adt",
  })
  @get()
  static getAdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adt",
  })
  @post("{id}")
  static createAdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
