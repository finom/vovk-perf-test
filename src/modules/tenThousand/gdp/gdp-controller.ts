import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdp")
export default class GdpController {
  @operation({
    summary: "Get Gdp",
  })
  @get()
  static getGdp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdp",
  })
  @post("{id}")
  static createGdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
