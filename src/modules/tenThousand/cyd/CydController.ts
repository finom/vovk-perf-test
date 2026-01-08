import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyd")
export default class CydController {
  @operation({
    summary: "Get Cyd",
  })
  @get()
  static getCyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyd",
  })
  @post("{id}")
  static createCyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
