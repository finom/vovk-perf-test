import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eld")
export default class EldController {
  @operation({
    summary: "Get Eld",
  })
  @get()
  static getEld = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eld",
  })
  @post("{id}")
  static createEld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
