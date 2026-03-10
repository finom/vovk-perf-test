import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fe")
export default class FeController {
  @operation({
    summary: "Get Fe",
  })
  @get()
  static getFe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fe",
  })
  @post("{id}")
  static createFe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
