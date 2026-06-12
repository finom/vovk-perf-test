import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hts")
export default class HtsController {
  @operation({
    summary: "Get Hts",
  })
  @get()
  static getHts = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hts",
  })
  @post("{id}")
  static createHts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
