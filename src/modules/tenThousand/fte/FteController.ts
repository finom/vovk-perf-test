import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fte")
export default class FteController {
  @operation({
    summary: "Get Fte",
  })
  @get()
  static getFte = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fte",
  })
  @post("{id}")
  static createFte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
