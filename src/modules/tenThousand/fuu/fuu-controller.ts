import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuu")
export default class FuuController {
  @operation({
    summary: "Get Fuu",
  })
  @get()
  static getFuu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fuu",
  })
  @post("{id}")
  static createFuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
