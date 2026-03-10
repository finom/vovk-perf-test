import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esg")
export default class EsgController {
  @operation({
    summary: "Get Esg",
  })
  @get()
  static getEsg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esg",
  })
  @post("{id}")
  static createEsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
