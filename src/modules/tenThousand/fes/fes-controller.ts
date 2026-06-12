import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fes")
export default class FesController {
  @operation({
    summary: "Get Fes",
  })
  @get()
  static getFes = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fes",
  })
  @post("{id}")
  static createFes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
