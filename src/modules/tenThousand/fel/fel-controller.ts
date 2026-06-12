import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fel")
export default class FelController {
  @operation({
    summary: "Get Fel",
  })
  @get()
  static getFel = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fel",
  })
  @post("{id}")
  static createFel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
