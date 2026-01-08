import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cny")
export default class CnyController {
  @operation({
    summary: "Get Cny",
  })
  @get()
  static getCny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cny",
  })
  @post("{id}")
  static createCny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
