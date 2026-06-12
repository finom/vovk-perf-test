import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvi")
export default class GviController {
  @operation({
    summary: "Get Gvi",
  })
  @get()
  static getGvi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvi",
  })
  @post("{id}")
  static createGvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
