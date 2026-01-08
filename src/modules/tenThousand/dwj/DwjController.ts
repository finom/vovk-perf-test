import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwj")
export default class DwjController {
  @operation({
    summary: "Get Dwj",
  })
  @get()
  static getDwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwj",
  })
  @post("{id}")
  static createDwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
