import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hge")
export default class HgeController {
  @operation({
    summary: "Get Hge",
  })
  @get()
  static getHge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hge",
  })
  @post("{id}")
  static createHge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
