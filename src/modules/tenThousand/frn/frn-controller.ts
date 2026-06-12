import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frn")
export default class FrnController {
  @operation({
    summary: "Get Frn",
  })
  @get()
  static getFrn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frn",
  })
  @post("{id}")
  static createFrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
