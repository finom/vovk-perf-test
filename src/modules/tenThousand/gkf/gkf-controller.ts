import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkf")
export default class GkfController {
  @operation({
    summary: "Get Gkf",
  })
  @get()
  static getGkf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gkf",
  })
  @post("{id}")
  static createGkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
