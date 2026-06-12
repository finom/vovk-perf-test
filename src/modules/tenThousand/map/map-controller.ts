import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("map")
export default class MapController {
  @operation({
    summary: "Get Map",
  })
  @get()
  static getMap = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Map",
  })
  @post("{id}")
  static createMap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
