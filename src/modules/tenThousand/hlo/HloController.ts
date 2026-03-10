import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlo")
export default class HloController {
  @operation({
    summary: "Get Hlo",
  })
  @get()
  static getHlo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlo",
  })
  @post("{id}")
  static createHlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
