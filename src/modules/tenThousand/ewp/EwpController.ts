import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewp")
export default class EwpController {
  @operation({
    summary: "Get Ewp",
  })
  @get()
  static getEwp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewp",
  })
  @post("{id}")
  static createEwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
