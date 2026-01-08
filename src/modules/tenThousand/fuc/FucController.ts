import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuc")
export default class FucController {
  @operation({
    summary: "Get Fuc",
  })
  @get()
  static getFuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuc",
  })
  @post("{id}")
  static createFuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
