import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpo")
export default class LpoController {
  @operation({
    summary: "Get Lpo",
  })
  @get()
  static getLpo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpo",
  })
  @post("{id}")
  static createLpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
