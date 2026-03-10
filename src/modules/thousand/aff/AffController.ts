import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aff")
export default class AffController {
  @operation({
    summary: "Get Aff",
  })
  @get()
  static getAff = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aff",
  })
  @post("{id}")
  static createAff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
