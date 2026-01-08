import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fay")
export default class FayController {
  @operation({
    summary: "Get Fay",
  })
  @get()
  static getFay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fay",
  })
  @post("{id}")
  static createFay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
