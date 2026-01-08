import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhj")
export default class JhjController {
  @operation({
    summary: "Get Jhj",
  })
  @get()
  static getJhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhj",
  })
  @post("{id}")
  static createJhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
