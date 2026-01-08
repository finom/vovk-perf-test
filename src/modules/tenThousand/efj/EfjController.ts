import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efj")
export default class EfjController {
  @operation({
    summary: "Get Efj",
  })
  @get()
  static getEfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efj",
  })
  @post("{id}")
  static createEfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
