import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esd")
export default class EsdController {
  @operation({
    summary: "Get Esd",
  })
  @get()
  static getEsd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esd",
  })
  @post("{id}")
  static createEsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
