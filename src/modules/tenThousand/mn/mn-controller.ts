import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mn")
export default class MnController {
  @operation({
    summary: "Get Mn",
  })
  @get()
  static getMn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mn",
  })
  @post("{id}")
  static createMn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
