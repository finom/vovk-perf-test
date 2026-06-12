import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbf")
export default class GbfController {
  @operation({
    summary: "Get Gbf",
  })
  @get()
  static getGbf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbf",
  })
  @post("{id}")
  static createGbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
