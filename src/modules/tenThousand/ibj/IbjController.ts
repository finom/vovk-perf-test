import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibj")
export default class IbjController {
  @operation({
    summary: "Get Ibj",
  })
  @get()
  static getIbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibj",
  })
  @post("{id}")
  static createIbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
