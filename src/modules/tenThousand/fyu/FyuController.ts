import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyu")
export default class FyuController {
  @operation({
    summary: "Get Fyu",
  })
  @get()
  static getFyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyu",
  })
  @post("{id}")
  static createFyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
