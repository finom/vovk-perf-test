import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eys")
export default class EysController {
  @operation({
    summary: "Get Eys",
  })
  @get()
  static getEys = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eys",
  })
  @post("{id}")
  static createEys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
