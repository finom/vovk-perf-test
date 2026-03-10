import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewf")
export default class EwfController {
  @operation({
    summary: "Get Ewf",
  })
  @get()
  static getEwf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewf",
  })
  @post("{id}")
  static createEwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
