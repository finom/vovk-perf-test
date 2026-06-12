import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gps")
export default class GpsController {
  @operation({
    summary: "Get Gps",
  })
  @get()
  static getGps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gps",
  })
  @post("{id}")
  static createGps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
