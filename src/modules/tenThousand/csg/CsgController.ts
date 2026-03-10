import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csg")
export default class CsgController {
  @operation({
    summary: "Get Csg",
  })
  @get()
  static getCsg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csg",
  })
  @post("{id}")
  static createCsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
