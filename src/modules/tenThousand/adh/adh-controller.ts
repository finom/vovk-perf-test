import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adh")
export default class AdhController {
  @operation({
    summary: "Get Adh",
  })
  @get()
  static getAdh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adh",
  })
  @post("{id}")
  static createAdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
