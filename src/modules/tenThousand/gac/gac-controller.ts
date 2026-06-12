import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gac")
export default class GacController {
  @operation({
    summary: "Get Gac",
  })
  @get()
  static getGac = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gac",
  })
  @post("{id}")
  static createGac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
