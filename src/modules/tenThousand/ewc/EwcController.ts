import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewc")
export default class EwcController {
  @operation({
    summary: "Get Ewc",
  })
  @get()
  static getEwc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewc",
  })
  @post("{id}")
  static createEwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
