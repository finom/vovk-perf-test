import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("geo")
export default class GeoController {
  @operation({
    summary: "Get Geo",
  })
  @get()
  static getGeo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Geo",
  })
  @post("{id}")
  static createGeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
