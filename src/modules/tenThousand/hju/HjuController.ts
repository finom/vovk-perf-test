import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hju")
export default class HjuController {
  @operation({
    summary: "Get Hju",
  })
  @get()
  static getHju = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hju",
  })
  @post("{id}")
  static createHju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
