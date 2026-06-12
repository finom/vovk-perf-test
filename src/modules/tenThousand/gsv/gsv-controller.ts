import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsv")
export default class GsvController {
  @operation({
    summary: "Get Gsv",
  })
  @get()
  static getGsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsv",
  })
  @post("{id}")
  static createGsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
