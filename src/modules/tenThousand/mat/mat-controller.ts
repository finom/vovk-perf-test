import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mat")
export default class MatController {
  @operation({
    summary: "Get Mat",
  })
  @get()
  static getMat = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mat",
  })
  @post("{id}")
  static createMat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
