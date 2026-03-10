import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewv")
export default class EwvController {
  @operation({
    summary: "Get Ewv",
  })
  @get()
  static getEwv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ewv",
  })
  @post("{id}")
  static createEwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
