import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbr")
export default class GbrController {
  @operation({
    summary: "Get Gbr",
  })
  @get()
  static getGbr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbr",
  })
  @post("{id}")
  static createGbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
