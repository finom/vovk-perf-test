import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hef")
export default class HefController {
  @operation({
    summary: "Get Hef",
  })
  @get()
  static getHef = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hef",
  })
  @post("{id}")
  static createHef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
