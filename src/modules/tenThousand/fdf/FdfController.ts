import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdf")
export default class FdfController {
  @operation({
    summary: "Get Fdf",
  })
  @get()
  static getFdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdf",
  })
  @post("{id}")
  static createFdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
