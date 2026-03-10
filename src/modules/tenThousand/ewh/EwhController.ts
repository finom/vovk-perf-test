import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewh")
export default class EwhController {
  @operation({
    summary: "Get Ewh",
  })
  @get()
  static getEwh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewh",
  })
  @post("{id}")
  static createEwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
