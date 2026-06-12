import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehh")
export default class EhhController {
  @operation({
    summary: "Get Ehh",
  })
  @get()
  static getEhh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ehh",
  })
  @post("{id}")
  static createEhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
