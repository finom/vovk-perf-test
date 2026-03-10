import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exy")
export default class ExyController {
  @operation({
    summary: "Get Exy",
  })
  @get()
  static getExy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exy",
  })
  @post("{id}")
  static createExy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
