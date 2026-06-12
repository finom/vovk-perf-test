import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("feb")
export default class FebController {
  @operation({
    summary: "Get Feb",
  })
  @get()
  static getFeb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Feb",
  })
  @post("{id}")
  static createFeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
