import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gis")
export default class GisController {
  @operation({
    summary: "Get Gis",
  })
  @get()
  static getGis = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gis",
  })
  @post("{id}")
  static createGis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
