import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clj")
export default class CljController {
  @operation({
    summary: "Get Clj",
  })
  @get()
  static getClj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clj",
  })
  @post("{id}")
  static createClj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
