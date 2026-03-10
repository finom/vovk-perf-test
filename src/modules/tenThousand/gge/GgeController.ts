import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gge")
export default class GgeController {
  @operation({
    summary: "Get Gge",
  })
  @get()
  static getGge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gge",
  })
  @post("{id}")
  static createGge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
