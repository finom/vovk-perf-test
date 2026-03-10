import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hft")
export default class HftController {
  @operation({
    summary: "Get Hft",
  })
  @get()
  static getHft = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hft",
  })
  @post("{id}")
  static createHft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
