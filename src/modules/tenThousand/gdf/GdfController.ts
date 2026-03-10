import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdf")
export default class GdfController {
  @operation({
    summary: "Get Gdf",
  })
  @get()
  static getGdf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdf",
  })
  @post("{id}")
  static createGdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
