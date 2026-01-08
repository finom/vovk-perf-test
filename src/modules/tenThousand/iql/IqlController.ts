import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iql")
export default class IqlController {
  @operation({
    summary: "Get Iql",
  })
  @get()
  static getIql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iql",
  })
  @post("{id}")
  static createIql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
