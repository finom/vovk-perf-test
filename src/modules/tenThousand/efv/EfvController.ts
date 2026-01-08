import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efv")
export default class EfvController {
  @operation({
    summary: "Get Efv",
  })
  @get()
  static getEfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efv",
  })
  @post("{id}")
  static createEfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
