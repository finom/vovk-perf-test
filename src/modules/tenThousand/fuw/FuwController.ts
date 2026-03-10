import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuw")
export default class FuwController {
  @operation({
    summary: "Get Fuw",
  })
  @get()
  static getFuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fuw",
  })
  @post("{id}")
  static createFuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
