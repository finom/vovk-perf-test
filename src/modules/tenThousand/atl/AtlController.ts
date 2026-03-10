import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atl")
export default class AtlController {
  @operation({
    summary: "Get Atl",
  })
  @get()
  static getAtl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atl",
  })
  @post("{id}")
  static createAtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
