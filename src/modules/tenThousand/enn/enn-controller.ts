import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enn")
export default class EnnController {
  @operation({
    summary: "Get Enn",
  })
  @get()
  static getEnn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enn",
  })
  @post("{id}")
  static createEnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
