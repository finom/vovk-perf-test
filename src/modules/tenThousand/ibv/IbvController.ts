import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibv")
export default class IbvController {
  @operation({
    summary: "Get Ibv",
  })
  @get()
  static getIbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibv",
  })
  @post("{id}")
  static createIbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
