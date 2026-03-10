import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbc")
export default class HbcController {
  @operation({
    summary: "Get Hbc",
  })
  @get()
  static getHbc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbc",
  })
  @post("{id}")
  static createHbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
