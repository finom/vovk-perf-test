import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqi")
export default class AqiController {
  @operation({
    summary: "Get Aqi",
  })
  @get()
  static getAqi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aqi",
  })
  @post("{id}")
  static createAqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
