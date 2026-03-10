import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hth")
export default class HthController {
  @operation({
    summary: "Get Hth",
  })
  @get()
  static getHth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hth",
  })
  @post("{id}")
  static createHth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
